---
name: routerbase-model-gateway
description: Configure RouterBase as an OpenAI-compatible model gateway and plan safe model routing, fallback, and media-generation requests. Use when the user asks to integrate RouterBase, choose RouterBase model IDs, migrate OpenAI SDK calls, or validate RouterBase chat, image, video, audio, or embedding workflows.
license: MIT
compatibility: Works with agents that can read SKILL.md files. Requires a RouterBase account and API key only for live API requests.
metadata:
  author: zenlee123
  version: "1.0"
---

# RouterBase Model Gateway

Use this skill when integrating [routerbase](https://routerbase.com/) as an OpenAI-compatible gateway for LLM, embedding, image, video, or audio workloads.

## When to Use

- The user wants to migrate OpenAI-compatible SDK calls to RouterBase.
- The user needs a primary model and fallback model plan.
- The task involves chat, reasoning, embeddings, image generation, video generation, audio generation, or mixed-modal routing.
- The user asks for request examples, validation checks, retry rules, or privacy guidance for RouterBase.

## Required Checks

Before producing code or instructions:

1. Confirm the target workload: chat, reasoning, embeddings, image, video, audio, or mixed-modal.
2. Verify current RouterBase model IDs, modality support, pricing, context limits, streaming, JSON mode, tool calling, and async behavior against current RouterBase data.
3. Keep credentials in environment variables or a secret manager. Never put a live key in prompts, logs, screenshots, code examples, or committed files.
4. Identify user data that may be sent in prompts, media inputs, embeddings text, generated outputs, logs, and usage metadata.

## Integration Pattern

Use the OpenAI-compatible client shape and set RouterBase as the base URL. Use placeholders only:

```bash
export ROUTERBASE_API_KEY="<redacted>"
```

```text
Base URL: https://routerbase.com/v1
Authorization: Bearer $ROUTERBASE_API_KEY
```

When writing examples, use environment variables and placeholder model IDs until the current RouterBase catalog has been checked.

## Routing Plan

For each recommendation, provide:

- Primary model and two fallbacks.
- Why each model fits the workload.
- Cost, latency, quality, context, streaming, and modality tradeoffs.
- Retry behavior for transient failures.
- Stop conditions for authentication, validation, quota, policy, and unsupported-modality errors.
- Human-review requirements for high-stakes outputs.

## Media Generation

For image, video, and audio workflows:

- Check whether the endpoint is synchronous or asynchronous.
- Validate input formats, output formats, duration, aspect ratio, resolution, and provider-specific limits.
- Include polling or callback handling only when the selected RouterBase route supports it.
- Redact private prompts, uploaded media, generated media, request IDs, and billing metadata before sharing examples.

## Output Format

Return a compact implementation plan:

1. Workload and assumptions.
2. Model routing table.
3. Environment variable setup.
4. OpenAI-compatible request example.
5. Validation checklist.
6. Privacy and safety notes.

## Do Not

- Do not invent model IDs, pricing, or modality support.
- Do not hardcode API keys or account IDs.
- Do not log prompts, media inputs, generated outputs, or billing metadata by default.
- Do not retry permanent failures such as invalid credentials, unsupported models, malformed requests, or policy errors.
