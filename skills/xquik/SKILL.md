---
name: xquik
description: Research public X profiles, posts, conversations, monitors, and exports with Xquik MCP or REST when access is available.
license: CC0-1.0
compatibility: Requires Xquik MCP or REST access.
metadata:
  author: Xquik
  version: "1.0"
---

# Xquik

Research public X data with Xquik MCP or REST access.

## When to Use

- The user asks for public X profile, post, conversation, search, trend, or monitor research.
- The user wants returned X data normalized for a report, table, export, or follow-up analysis.
- The user needs source links or identifiers for the posts or profiles behind a finding.

Do not use this skill for private account access or actions the user has not authorized.

## References

- MCP overview: <https://docs.xquik.com/mcp/overview>
- REST API reference: <https://docs.xquik.com/api-reference/overview>
- Public repository: <https://github.com/Xquik-dev/x-twitter-scraper>

## Workflow

1. Restate the user's research goal as concrete X data tasks.
2. Prefer the Xquik MCP tools when they are available in the current client.
3. Use REST only when MCP tools are unavailable or the user asks for REST-shaped output.
4. Fetch the narrowest dataset needed for the answer.
5. Normalize results into stable fields such as author, handle, post URL, timestamp, text, metrics, and source query.
6. Deduplicate repeated posts or profiles before drawing conclusions.
7. Separate observed data from interpretation.

## Output

- Start with the main finding.
- Include the data scope, filters, and time range.
- Cite returned URLs or identifiers for important examples.
- Call out missing access, empty result sets, or partial coverage.
- Suggest the next narrow query only when it would materially improve the answer.
