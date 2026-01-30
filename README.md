# Relay Helper

The open-source logic for the Relay Helper.

This repository contains the command-line interface, server routes, and business logic that powers the Relay Helper. While the core runtime engine is proprietary, this entire logic layer is open source and community-driven.

## Architecture

Relay operates on a "Open Logic, Secure Engine" model:
*   **The Engine**: A proprietary, signed binary that handles secure system operations, file access, and updates.
*   **The Helper (This Repo)**: The TypeScript source code that defines commands and application behavior.

## Usage

This package is not designed to be run standalone. It is loaded by the Relay Engine.

### Development

To contribute commands or fix bugs, you can run your local version of this logic on top of your installed Relay Engine.

1.  Clone this repository.
2.  Run `relay attach` in this directory.
3.   The Relay Engine will hot-swap its internal logic with your local code.

## License

MIT
