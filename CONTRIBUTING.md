# Contributing

We welcome contributions to the Relay Helper. This repository defines the behavior of the CLI and local server.

## Philosophy

Relay is designed to be minimal, fast, and secure.
*   **No Bloat**: Features should be essential.
*   **Performance**: Logic should be optimized for start-up time.
*   **Type Safety**: All code must be written in strict TypeScript.

## Development Process

1.  **Environment**: You need the Relay Runtime installed on your machine.
2.  **Attach Mode**: Run `relay attach` in the root of this repository. This instructs the installed Relay binary to load source code from the current directory.
3.  **Testing**: Verify your changes by running Relay commands in a separate terminal. The attached process will log activity.

## Pull Requests

*   Ensure your code passes the build.
*   Follow existing patterns in `src/cli` and `src/server`.
*   Keep dependencies to a minimum.
