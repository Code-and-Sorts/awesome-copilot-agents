---
name: x-research
description: Search and inspect current public X/Twitter posts, trends, profiles, profile posts, media, and replies through AgentBody's fixed REST contract. Use when the user asks to search X or Twitter, monitor a topic or account, inspect a post, track trends, or gather current X evidence.
license: MIT
compatibility: Requires Python 3 and an AgentBody API key
metadata:
  author: AgentBody
  version: "1.0"
---

# X Research

Read-only X/Twitter research through AgentBody's REST API: public post search, trends, post details, profiles, profile posts/media, and post replies.

## When to Use

- Search public X posts ("search X for AI agents")
- Read current trends ("what is trending on X")
- Inspect a post or profile
- Read profile posts, media, or post replies

## Setup

Configure `AGENTBODY_API_KEY` once using the [AgentBody Agent Quickstart](https://agentbody.io/docs/agent-quickstart.md). Run the bundled client with:

```bash
python3 scripts/x_client.py search --query "AI agents"
python3 scripts/x_client.py trending --country US
python3 scripts/x_client.py profile --username OpenAI
```

The skill is read-only. Posting, OAuth, likes, follows, and account management are out of scope.