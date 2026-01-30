# Developer Guide

## System Components

### The Engine
The Relay Engine is a pre-compiled binary responsible for:
*   Process management
*   Secure file system access
*   Cryptographic signing
*   Auto-updates

### The Helper (This Repo)
The Helper contains the logic that runs *inside* the Engine's context. It includes:
*   **CLI**: Command definitions (e.g., `doctor`, `create-app`).
*   **Server**: The local HTTP/WebSocket server endpoints.

## Runtime Injection

When running in `attach` mode, the Engine injects several global objects and environment variables into the process:
*   `RELAY_SECURE_CONTEXT`: Provides access to privileged APIs.
*   `process.env`: Populated with installation paths and configuration.

Do not attempt to shim or mock these in production code; rely on the Engine to provide them.
