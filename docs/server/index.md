# Server: Index

The main assembly point for the Hono-based API.

## Responsibilities
- Initializing the Hono application instance.
- Configuring **CORS** for secure mobile communication.
- Mounting feature-specific routes (e.g., Doctor, Info, Memos).
- Handling WebSocket handovers for terminal sessions.

## Extension Pattern
New API features should be created in a dedicated file within `src/server/` and mounted in the `createRelayServer` function.
