# Developer Guide

## System Architecture

Relay is built on a split architecture that prioritizes security and performance.

### The Relay Engine (Private)
A signed binary that serves as the "Host". It handles:
*   **Process Management**: Running and monitoring background services.
*   **Secure Access**: Permission-gated file system and shell interactions.
*   **Bridge Networking**: Secure, local-only communication between devices.

### The Relay Helper (This Repo)
The logic layer that runs inside the Engine. It defines the "Intelligence" of the bridge:
*   **CLI Definitions**: Professional tools like `doctor`, `apps`, and `create-app`.
*   **Server Endpoints**: The Hono-based API that the mobile app interacts with to control the machine.

## The 'Attach' Protocol

Successful contribution relies on the `relay attach` protocol. When the Engine enters "Attach Mode", it:
1.  Locates the local `package.json` and `dist/index.js`.
2.  Redirects all internal command calls to the local logic.
3.  Injects the necessary secure environment variables for local testing.

This allows the community to build open-source "Clips" and Helper logic while maintaining the security of the core engine.
