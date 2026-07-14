---
name: ontoly-software-graph
description: Use Ontoly's deterministic Software Graph and MCP server for architecture summaries, route tracing, dependency analysis, configuration usage, and impact analysis before broad source search.
license: MIT
compatibility: Requires Ontoly installed in the target repository or available through npx. Optional Ontoly MCP server support improves query ergonomics.
metadata:
  author: 0xsarwagya
  version: "1.0"
---

# Ontoly Software Graph

Use Ontoly as the evidence layer for repository-level software understanding.
This skill teaches the workflow for using Ontoly; it does not replace Ontoly's
compiler, graph, query engine, or MCP capabilities.

## When to Use

- Explain repository architecture, package structure, modules, services, or ownership.
- Trace a route, request lifecycle, dependency path, call chain, or impact radius.
- Find controllers, services, providers, configuration, environment variables, imports, exports, or graph diagnostics.
- Compare deterministic graph evidence with source-file verification.

Do not use this skill for ordinary single-file edits unless the user asks for
repository-level context.

## Workflow

1. Check for an existing graph: `.ontoly/`, `SoftwareGraph.json`, `diagnostics.json`, or Ontoly docs.
2. If the graph is missing and Ontoly is available, build it from the repository root:

   ```bash
   ontoly build .
   ```

   If the command is unavailable, try the documented package runner:

   ```bash
   npx ontoly build .
   ```

3. Inspect graph health before answering. Look for graph statistics,
   diagnostics, semantic coverage, trust, and framework detection.
4. Query Ontoly before broad source search. Prefer Ontoly MCP capabilities or
   documented CLI queries for architecture, route tracing, dependency,
   configuration, and impact questions.
5. Cite graph evidence: node names, stable identifiers, relationship types,
   diagnostics, source locations, and commands used.
6. Search source files only when the graph is missing, stale, ambiguous, low
   confidence, diagnostically incomplete, or when the user asks for source
   verification.

## Evidence Rules

- Treat graph output as deterministic evidence, not model inference.
- Do not invent confidence. Derive it from exact node matches, resolved edges,
  provenance, diagnostics, validation status, and source locations.
- Report `NOT_FOUND` when Ontoly has no matching graph concept.
- Name ambiguity when multiple nodes or relationships may answer the question.
- Separate measured graph results from source-file verification and assumptions.

## Output Contract

For repository-level answers, include:

- Direct answer.
- Evidence from Ontoly graph nodes, edges, diagnostics, source locations, or commands.
- Confidence: high, medium, or low, with the graph-based reason.
- Gaps: missing graph concepts, unresolved imports, stale graph, or fallback file searches.

Keep the answer focused. Ontoly helps avoid broad file search; do not dump raw
graph data unless the user asks for it.
