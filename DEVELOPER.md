# Developer Guide

## Architecture

Relay is composed of two parts:
1.  **Core Binary (Engine)**: Handles the low-level system operations, security, and updates.
2.  **Extensions (This Repo)**: Handles the high-level business logic.

### The `relay attach` Protocol

When you run `relay attach`, the binary looks for a `package.json` in the current directory. If it finds one with a valid structure, it:
1.  Spawns a child process running `npm run dev` in your directory.
2.  Proxies all CLI commands and API requests to your local process.
3.  Injects the `RELAY_SECURE_CONTEXT` environment variables so your code can access protected APIs.

This allows you to develop "inside" the engine without having access to the engine's source code.
