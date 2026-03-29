import { readFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import type { CommandGroup, Command } from './types.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const GITHUB_RAW_BASE = 'https://raw.githubusercontent.com/MicrosoftDocs/azure-docs-cli/main/docs-ref-autogen/Latest-version/latest';
const GITHUB_API_TREE = 'https://api.github.com/repos/MicrosoftDocs/azure-docs-cli/git/trees/main?recursive=1';
const FETCH_DELAY_MS = 50;

let cachedTree: string[] | null = null;

function sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function fetchWithRetry(url: string, retries = 3): Promise<string> {
    for (let attempt = 1; attempt <= retries; attempt++) {
        try {
            const response = await fetch(url);
            if (response.status === 404) return '';
            if (!response.ok) {
                throw new Error(`HTTP ${response.status} for ${url}`);
            }
            return await response.text();
        } catch (error) {
            if (attempt === retries) throw error;
            console.warn(`  Retry ${attempt}/${retries} for ${url}`);
            await sleep(1000 * attempt);
        }
    }
    throw new Error('Unreachable');
}

async function getRepoTree(): Promise<string[]> {
    if (cachedTree) return cachedTree;

    console.log('Fetching GitHub repo tree...');
    const response = await fetch(GITHUB_API_TREE);
    if (!response.ok) throw new Error(`GitHub API error: ${response.status}`);

    const data = await response.json() as { tree: Array<{ path: string; type: string }> };
    cachedTree = data.tree
        .filter(t => t.path.startsWith('docs-ref-autogen/Latest-version/latest/') && t.path.endsWith('.yml'))
        .map(t => t.path.replace('docs-ref-autogen/Latest-version/latest/', ''));

    console.log(`  Found ${cachedTree.length} YAML files in repo tree.`);
    return cachedTree;
}

function parseDirectCommands(yaml: string): Command[] {
    const commands: Command[] = [];
    const pattern = /- uid: \S+\n  name: (.+)\n  summary: \|[-]?\n    (.+)/g;

    let match;
    while ((match = pattern.exec(yaml)) !== null) {
        commands.push({
            name: match[1].trim(),
            description: match[2].trim(),
        });
    }

    return commands;
}

export function loadIndex(): CommandGroup[] {
    const indexPath = resolve(__dirname, 'index-data.json');
    const data = JSON.parse(readFileSync(indexPath, 'utf-8'));
    return data.map((item: Record<string, string>) => ({
        name: item.name,
        description: item.description,
        type: item.type as CommandGroup['type'],
        status: item.status,
        url: `${GITHUB_RAW_BASE}/${item.name}.yml`,
    }));
}

export async function fetchGroupCommands(group: CommandGroup): Promise<Command[]> {
    const tree = await getRepoTree();
    const groupSlug = group.name;

    // Find all YAML files for this group:
    // - {groupSlug}.yml (the main group file)
    // - {groupSlug}/*.yml (subgroup files)
    // - {groupSlug}/**/*.yml (nested subgroup files)
    const groupFiles = tree.filter(path =>
        path === `${groupSlug}.yml` ||
        path.startsWith(`${groupSlug}/`)
    );

    if (groupFiles.length === 0) {
        console.warn(`  ${group.name}: no YAML files found in repo tree`);
        return [];
    }

    const commands: Command[] = [];
    const seenNames = new Set<string>();

    for (const filePath of groupFiles) {
        const url = `${GITHUB_RAW_BASE}/${filePath}`;
        await sleep(FETCH_DELAY_MS);

        try {
            const yaml = await fetchWithRetry(url);
            if (!yaml) continue;

            const fileCommands = parseDirectCommands(yaml);
            for (const cmd of fileCommands) {
                if (!seenNames.has(cmd.name)) {
                    commands.push(cmd);
                    seenNames.add(cmd.name);
                }
            }
        } catch (error) {
            // Skip failed fetches
        }
    }

    return commands;
}
