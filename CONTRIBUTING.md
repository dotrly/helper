# Contributing to Relay Helper

Thank you for your interest in contributing! We want to make Relay the best tool for local AI development.

## How it Works

The Relay architecture uses a **"Proprietary Engine, Open Extensions"** model.
- **The Engine**: Defines the secure runtime, file access, and API signing.
- **The Extensions (This Repo)**: Defines the actual commands and logic.

When you contribute here, your code is bundled into the next official release of Relay.

## Development Workflow

1.  **Fork & Clone**
2.  **Attach**: Run `relay attach` in the root of this repo.
3.  **Code**: Add your new command in `src/cli/my-command.ts`.
4.  **Register**: Export it in `src/index.ts`.
5.  **Test**: Run `relay my-command` (while attached).
6.  **PR**: Submit your Pull Request!

## Guidelines
- Keep dependencies minimal.
- Use TypeScript.
- Respect the existing code style.
