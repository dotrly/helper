# Developer Guide

This guide explains the technical structure of the Relay Helper and how to extend its capabilities.

## Module Structure

The codebase is organized into functional modules located in the `src/` directory:

### 1. `src/cli/`
This directory contains all command-line interface logic. Each file should correspond to a specific command or a related set of sub-commands.
- **`doctor.ts`**: Implements the `relay doctor` command for system diagnostics.
- **`help.ts`**: Implements the `relay help` command, providing a dynamic menu of available bridge operations.
- **`update.ts`**: Implements `relay update` for self-updating the application.
- **`uninstall.ts`**: Implements `relay uninstall` for complete removal of the application.
- **Convention**: Export an async function that performs the action. The function name in `index.ts` determines the CLI command name.

### 2. `src/server/`
This directory houses the Hono-based API server.
- **`index.ts`**: The main server assembly where routes are mounted.
- **Logic Files**: Specific logic handlers (e.g., `doctor.ts` for system metrics).
- **Convention**: API routes should start with `/api/` to avoid conflicts with static asset serving.

### 3. `src/index.ts`
The central entry point. This file exports two primary objects to the Engine:
- `cli`: An object mapping command names to their implementation functions.
- `server`: An object containing the `createRelayServer` factory.
- `metadata`: Basic package information (name & version).

## Naming Conventions

To maintain a professional and consistent experience for Relay users:

| Area | Convention | Example |
| :--- | :--- | :--- |
| **CLI Commands** | Kebab-case, lowercase | `relay system-check` |
| **API Endpoints** | Lowercase, hyphenated | `/api/system-status` |
| **File Names** | Kebab-case, lowercase | `src/cli/system-check.ts` |
| **Functions** | camelCase | `export async function checkSystem()` |

## Integration with the Engine

The Relay Engine (proprietary) handles the lifecycle of the Helper. When `relay attach` is active:
- The Engine starts a compilation watcher.
- It dynamically imports `dist/index.js` on every execution.
- It proxies CLI arguments directly to your exported functions in `cli`.

### Global Context
The Engine injects several environment variables that you should use for system paths:
- `RELAY_HOME`: Path to the `.relay` data directory.
- `RELAY_APPS`: Path where installed `.rly` apps are stored.

## Best Practices

1. **Lazy Loading**: Use dynamic `require` or `import()` inside command functions for heavy dependencies to keep the initial boot time fast.
2. **Standard Output**: Use standard `console.log` for CLI feedback. Use the available ANSI color codes (`\x1b[...]`) for a premium "Relay" feel.
3. **Async Everything**: Always use async/await for I/O operations (file system, network) to prevent blocking the event loop.
