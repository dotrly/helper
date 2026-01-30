# CLI: Help

The `help` command provides a dynamic, categorized menu of all available bridge operations.

## Architecture
This module implements a **decentralized help system**. It:
1. Imports metadata from other CLI modules.
2. Aggregates them into a unified list.
3. Groups commands by category: **Engine**, **App**, and **System**.

## Customization
To add a command to this menu, export a `metadata` object from your CLI module and register it in the `showHelp` command list.
