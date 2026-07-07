---
name: tree-ring-memory
description: Use Tree Ring Memory for lifecycle-aware AI-agent memory: explicit recall, concise memory capture, evidence-backed lessons, privacy-safe forgetting, and project-local memory roots.
license: MIT
compatibility: Requires the Tree Ring Memory CLI (`tree-ring`) installed globally or project-locally.
metadata:
  author: TerminallyLazy
  version: "0.11.0"
---

# Tree Ring Memory

Use Tree Ring Memory as an explicit memory lifecycle layer for AI agents, not as
a transcript dump or hidden recorder.

Tree Ring Memory helps agents preserve decisions, warnings, preferences, and
validated lessons while keeping sensitive or wrong memory removable. Fresh work
stays detailed, older learning compresses into rings, important failures remain
visible as scars, and strongly supported lessons become heartwood.

## When To Use

Use this skill when the user asks to:

- remember or recall project decisions, warnings, preferences, or lessons
- avoid repeating a validated failure
- store evidence-backed outcomes from evaluations, incidents, PRs, or tests
- audit, redact, delete, supersede, import, export, or consolidate memory
- initialize a project-local memory root for agent workflows
- sync DOX-style `AGENTS.md` guidance or Revolve evaluation records

Do not store secrets, credentials, raw chain-of-thought, private identifiers, or
temporary scratchpad notes. Store concise lessons and source references, not
full conversations.

## Install

Install globally from the project installer:

```bash
curl -fsSL https://raw.githubusercontent.com/TerminallyLazy/Tree-Ring-Memory/main/install.sh | sh
```

Install on macOS ARM64 with Homebrew:

```bash
brew tap TerminallyLazy/tree-ring
brew install tree-ring
```

For a project-local setup:

```bash
curl -fsSL https://raw.githubusercontent.com/TerminallyLazy/Tree-Ring-Memory/main/install.sh | sh -s -- --project --init
```

If the project was initialized locally, use `.tree-ring/CLI.md` as the command
reference and include `--root .tree-ring` when needed.

## Core Workflow

Initialize memory:

```bash
tree-ring init
```

Recall before risky or repeated work:

```bash
tree-ring recall "release behavior" --project example-service
```

Remember a concise decision or lesson:

```bash
tree-ring remember "Use project-scoped recall before risky release changes." \
  --event-type lesson \
  --scope project \
  --project example-service \
  --tag release
```

Record evaluated outcomes with evidence:

```bash
tree-ring evidence "Snapshot invalidation fixed stale unread chat state." \
  --outcome promoted \
  --evidence-ref evals/chat-state/run-042 \
  --project agent-ui \
  --score 0.91
```

Use outcome mapping deliberately:

- `promoted` becomes durable heartwood
- `rejected` becomes a scar for failed or rolled-back approaches
- `deferred` becomes a seed for future work
- `observed` stays a recent evaluation result

## Maintenance And Privacy

Audit and maintain memory locally:

```bash
tree-ring audit --audit-type sensitive
tree-ring consolidate --period-type manual --dry-run
tree-ring maintain
tree-ring maintain --apply-expired --repair-fts
```

Forget wrong, stale, or unsafe memory:

```bash
tree-ring forget <memory-id> --mode redact --reason "remove sensitive detail"
tree-ring forget <memory-id> --mode delete --reason "wrong or should not persist"
```

Run source adapters with `--dry-run` first:

```bash
tree-ring dox sync --source-root . --dry-run
tree-ring revolve sync --source-root revolve --dry-run
tree-ring integrations scan --source-root .
```

Imported memory is a concise, source-linked recall aid. It does not replace
source documents, tests, PRs, issues, evaluation records, or project
instructions.

## Closeout Habit

At the end of meaningful work, decide whether any memory is worth keeping:

- What did we decide?
- What did we learn?
- What should future agents avoid repeating?
- Did the user state a durable preference?
- Is there a future seed worth revisiting?
- Is any memory sensitive and better left unstored?

Only write memory that will materially improve future work and is safe to keep.
