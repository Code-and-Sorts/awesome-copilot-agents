import { writeFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import type { CommandGroup } from './types.js';
import { CATEGORY_MAP } from './types.js';

function getCategoryForGroup(groupName: string): string {
    for (const [category, groups] of Object.entries(CATEGORY_MAP)) {
        if (groups.includes(groupName)) return category;
    }
    return 'Other';
}

function getRefPath(groupName: string, refsDir: string): string {
    const dirPath = join(refsDir, groupName);
    // Check if it's a split group (has subdirectory)
    // For the SKILL.md link, always point to the .md file
    return `./references/${groupName}.md`;
}

export function generateSkillMd(
    groups: CommandGroup[],
    skillDir: string,
    refsDir: string,
    dryRun: boolean
): void {
    const categorized = new Map<string, CommandGroup[]>();

    for (const group of groups) {
        const category = getCategoryForGroup(group.name);
        if (!categorized.has(category)) {
            categorized.set(category, []);
        }
        categorized.get(category)!.push(group);
    }

    // Sort groups within each category
    for (const [, groupList] of categorized) {
        groupList.sort((a, b) => a.name.localeCompare(b.name));
    }

    const categoryOrder = [
        'Compute', 'Networking', 'Storage', 'Databases',
        'Containers & Registries', 'Identity & Security',
        'Management & Governance', 'Monitoring & Analytics',
        'DevOps & Integration', 'AI & ML', 'IoT & Edge',
        'Migration & Hybrid', 'Compliance & Automation',
        'Partner & Marketplace', 'CLI Tools', 'Other'
    ];

    const lines: string[] = [
        '---',
        'name: az-cli',
        'description: Use the Azure CLI (`az`) to manage Azure resources from the command line. Trigger this skill whenever the user asks to create, configure, manage, deploy, or interact with any Azure resource — even if they don\'t explicitly mention "az cli". Also trigger when the user asks about Azure CLI commands, syntax, or wants to know how to do something in Azure from the terminal.',
        'compatibility: Requires az-cli installed (https://learn.microsoft.com/en-us/cli/azure/install-azure-cli) and configured with `az login`.',
        'metadata:',
        '  author: Colby Timm',
        '  version: "2.0"',
        '---',
        '',
        '# Az CLI',
        '',
        'Help users accomplish Azure tasks by identifying the right `az` commands, gathering required parameters, and executing them.',
        '',
        '## Workflow',
        '',
        'When a user asks to do something with Azure:',
        '',
        '1. **Identify the command** — find the right `az` subcommand from the reference docs below. If the task spans multiple commands, plan the sequence.',
        '2. **Check for required parameters** — read the relevant reference file to understand what the command needs. If the user hasn\'t provided required values (resource group, name, SKU, location, etc.), ask them before running anything.',
        '3. **Construct and execute** — build the command with the user\'s parameters and run it. If a command has optional flags that would be useful for the user\'s scenario, mention them.',
        '4. **Verify the result** — after running a command, check the output for errors. If something fails, diagnose and suggest fixes (common issues: wrong resource group, missing provider registration, quota limits).',
        '',
        'When a user asks about Azure CLI syntax or wants to know what commands are available for a service, read the relevant reference file and summarize what\'s available.',
        '',
        '## Command Groups',
        '',
    ];

    for (const category of categoryOrder) {
        const groupList = categorized.get(category);
        if (!groupList || groupList.length === 0) continue;

        lines.push(`### ${category}`);
        lines.push('');
        lines.push('| Command | Description | Status | Reference |');
        lines.push('|---------|-------------|--------|-----------|');

        for (const group of groupList) {
            const refPath = getRefPath(group.name, refsDir);
            const statusBadge = group.status !== 'GA' ? ` ${group.status}` : '';
            const typeNote = group.type === 'Extension' ? ' (ext)' : '';
            lines.push(`| \`az ${group.name}\` | ${group.description} | ${group.status}${typeNote} | [ref](${refPath}) |`);
        }

        lines.push('');
    }

    lines.push('## When a command isn\'t covered');
    lines.push('');
    lines.push('If the user asks about an `az` subcommand that doesn\'t have a reference file here, use the Azure Docs MCP tools (`microsoft_docs_search`, `microsoft_code_sample_search`) to look up the command syntax and required parameters. The reference files above cover the most common command groups, but the Azure CLI has hundreds more — don\'t let a missing reference file stop you from helping.');
    lines.push('');

    const content = lines.join('\n');
    const outputPath = join(skillDir, 'SKILL.md');

    if (!dryRun) {
        writeFileSync(outputPath, content);
    }

    const lineCount = content.split('\n').length;
    console.log(`\nSKILL.md: ${lineCount} lines, ${groups.length} command groups across ${categorized.size} categories`);

    if (lineCount > 500) {
        console.warn(`⚠ SKILL.md is ${lineCount} lines (target: <500). Consider trimming descriptions.`);
    }
}
