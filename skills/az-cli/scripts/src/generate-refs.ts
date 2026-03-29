import { writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import type { CommandGroup, Command, GenerateOptions } from './types.js';
import { LARGE_GROUP_THRESHOLD } from './types.js';

function formatRefFile(heading: string, commands: Command[]): string {
    const lines: string[] = [`# ${heading}`, '', '```bash'];

    for (const cmd of commands) {
        lines.push(`# ${cmd.description}`);
        lines.push(cmd.name);
        lines.push('');
    }

    // Remove trailing blank line inside code block
    if (lines[lines.length - 1] === '') {
        lines.pop();
    }

    lines.push('```');
    lines.push('');
    return lines.join('\n');
}

function formatTocFile(group: CommandGroup, subgroups: Map<string, Command[]>): string {
    const lines: string[] = [
        `# az ${group.name}`,
        '',
        group.description,
        '',
        '## Subgroups',
        '',
    ];

    const sortedSubgroups = [...subgroups.keys()].sort();
    for (const sub of sortedSubgroups) {
        const count = subgroups.get(sub)!.length;
        lines.push(`- [az ${group.name} ${sub}](./${group.name}/${sub}.md) (${count} commands)`);
    }

    lines.push('');
    return lines.join('\n');
}

function splitIntoSubgroups(groupName: string, commands: Command[]): Map<string, Command[]> {
    const subgroups = new Map<string, Command[]>();
    const prefix = `az ${groupName} `;

    for (const cmd of commands) {
        if (!cmd.name.startsWith(prefix)) continue;

        const rest = cmd.name.slice(prefix.length);
        const subgroupName = rest.split(' ')[0];

        if (!subgroups.has(subgroupName)) {
            subgroups.set(subgroupName, []);
        }
        subgroups.get(subgroupName)!.push(cmd);
    }

    // Commands directly on the group (no further nesting) go into a "_root" bucket
    const directCommands = commands.filter(c => {
        const rest = c.name.slice(prefix.length);
        return !rest.includes(' ');
    });
    if (directCommands.length > 0) {
        subgroups.set('_root', directCommands);
    }

    return subgroups;
}

export function generateRefFiles(
    group: CommandGroup,
    commands: Command[],
    options: GenerateOptions
): { filesWritten: number; commandCount: number } {
    const { refsDir, dryRun } = options;

    if (commands.length === 0) {
        const filePath = join(refsDir, `${group.name}.md`);
        const content = [
            `# az ${group.name}`,
            '',
            group.description,
            '',
            `> No commands found in documentation. Use \`az ${group.name} --help\` for the latest commands.`,
            ''
        ].join('\n');

        if (!dryRun) {
            mkdirSync(dirname(filePath), { recursive: true });
            writeFileSync(filePath, content);
        }
        console.log(`  ${group.name}: empty (placeholder written)`);
        return { filesWritten: 1, commandCount: 0 };
    }

    if (commands.length <= LARGE_GROUP_THRESHOLD) {
        const filePath = join(refsDir, `${group.name}.md`);
        const content = formatRefFile(`az ${group.name}`, commands);

        if (!dryRun) {
            mkdirSync(dirname(filePath), { recursive: true });
            writeFileSync(filePath, content);
        }
        console.log(`  ${group.name}: ${commands.length} commands → ${group.name}.md`);
        return { filesWritten: 1, commandCount: commands.length };
    }

    // Large group: split into subdirectory
    const subgroups = splitIntoSubgroups(group.name, commands);
    const subDir = join(refsDir, group.name);

    if (!dryRun) {
        mkdirSync(subDir, { recursive: true });
    }

    // Write TOC file
    const tocPath = join(refsDir, `${group.name}.md`);
    const tocContent = formatTocFile(group, subgroups);
    if (!dryRun) {
        writeFileSync(tocPath, tocContent);
    }

    // Write subgroup files
    let filesWritten = 1; // TOC file
    for (const [subName, subCommands] of subgroups) {
        const subFilePath = join(subDir, `${subName}.md`);
        const heading = subName === '_root'
            ? `az ${group.name} (direct commands)`
            : `az ${group.name} ${subName}`;
        const content = formatRefFile(heading, subCommands);

        if (!dryRun) {
            writeFileSync(subFilePath, content);
        }
        filesWritten++;
    }

    console.log(`  ${group.name}: ${commands.length} commands → ${subgroups.size} subgroup files`);
    return { filesWritten, commandCount: commands.length };
}
