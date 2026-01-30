# CLI: Help

The `help` command provides a dynamic, categorized menu of all available bridge operations.

## Architecture
This module implements a **decentralized help system**. It:
1. Imports metadata from other CLI modules.
2. Aggregates them into a unified list.
3. Groups commands by category: **Engine**, **App**, and **System**.

## Customization
To add a command to this menu:
1. Create a new module in `src/cli/`.
2. Export a `metadata` object containing `name`, `description`, and `category`.
3. Register the new module in `src/index.ts` to export it to the Engine.
4. The `help` command will automatically pick up the metadata via the `_meta` registry in `src/index.ts`.
