import { resolve, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import process from 'node:process';
import { loadIndex, fetchGroupCommands } from './fetch-docs.js';
import { generateRefFiles } from './generate-refs.js';
import { generateSkillMd } from './generate-skill.js';
import type { GenerateOptions } from './types.js';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const SKILL_DIR = resolve(__dirname, '..', '..');
const REFS_DIR = join(SKILL_DIR, 'references');

function parseArgs(argv: string[]): GenerateOptions {
    const args = argv.slice(2);
    return {
        coreOnly: args.includes('--core-only'),
        singleGroup: args.find((_, i) => args[i - 1] === '--group'),
        dryRun: args.includes('--dry-run'),
        refsDir: REFS_DIR,
    };
}

async function main() {
    const options = parseArgs(process.argv);

    console.log('=== Azure CLI Reference Generator ===');
    console.log(`  Core only: ${options.coreOnly}`);
    console.log(`  Single group: ${options.singleGroup || 'all'}`);
    console.log(`  Dry run: ${options.dryRun}`);
    console.log(`  Refs dir: ${options.refsDir}`);
    console.log('');

    let groups = loadIndex();

    if (options.coreOnly) {
        groups = groups.filter(g => g.type === 'Core' || g.type === 'Core and Extension');
        console.log(`Filtered to ${groups.length} Core/Both groups.`);
    }

    if (options.singleGroup) {
        groups = groups.filter(g => g.name === options.singleGroup);
        if (groups.length === 0) {
            console.error(`Group "${options.singleGroup}" not found.`);
            process.exit(1);
        }
    }

    console.log(`\nGenerating reference files for ${groups.length} groups...\n`);

    let totalFiles = 0;
    let totalCommands = 0;
    let emptyGroups = 0;

    for (const group of groups) {
        try {
            const commands = await fetchGroupCommands(group);
            const result = generateRefFiles(group, commands, options);
            totalFiles += result.filesWritten;
            totalCommands += result.commandCount;
            if (result.commandCount === 0) emptyGroups++;
        } catch (error) {
            console.error(`  ✗ ${group.name}: ${error instanceof Error ? error.message : String(error)}`);
        }
    }

    console.log(`\n=== Summary ===`);
    console.log(`  Groups processed: ${groups.length}`);
    console.log(`  Files written: ${totalFiles}`);
    console.log(`  Total commands: ${totalCommands}`);
    console.log(`  Empty groups: ${emptyGroups}`);

    // Generate SKILL.md with all groups from the index (not filtered)
    if (!options.singleGroup) {
        console.log('\nRegenerating SKILL.md...');
        const allGroups = loadIndex();
        generateSkillMd(allGroups, SKILL_DIR, REFS_DIR, options.dryRun);
    }

    console.log('\nDone.');
}

main().catch(error => {
    console.error('Fatal error:', error);
    process.exit(1);
});
