# API Usage: Quick Start

This directory contains guides for interacting with the Relay Helper API.

## TL;DR

- **Base URL**: `http://localhost:3000`
- **Health Check**: `GET /`
- **System Metrics**: `GET /api/doctor`
- **Save Memo**: `POST /api/memo` { "text": "..." }

## Detailed Guides

| Guide | Description |
| :--- | :--- |
| [Overview](./index.md) | Base URL and getting started steps. |
| [System](./system.md) | Diagnostics, CPU, and Memory metrics. |
| [Memos](./memos.md) | How to use the volatile state storage. |
| [Reserved](./reserved.md) | Routes managed by the Engine (Avoid these!). |

> [!TIP]
> Use `relay status` in the CLI to verify if the server is currently running before making API calls.
