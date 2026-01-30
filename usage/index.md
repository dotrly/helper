# API Usage: Overview

The Relay Helper API is a lightweight logic layer that allows the Relay mobile app to interact with the host machine. It is built using the [Hono](https://hono.dev/) framework.

## Base URL
When the Relay Engine is running, the API is typically accessible at:
`http://localhost:3000` (or the port configured by the Engine)

## Content Categories

### [System Endpoints](./system.md)
Core diagnostics, environment info, and real-time performance metrics.

### [Memo Storage](./memos.md)
An example feature demonstrating persistent state management for text snippets.

### [Reserved Routes](./reserved.md)
A critical list of endpoints managed by the Relay Engine that must not be overridden.

## Getting Started
To verify the API is running, perform a simple GET request to the root endpoint:
```bash
curl http://localhost:3000/
```
You should receive a JSON response confirming the status and version.
