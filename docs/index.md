# Entry Point: Index

The primary interface between the Relay Engine and the Helper logic layer.

## Exports

### `cli`
An object mapping CLI command names to their implementation functions.

### `server`
The `createRelayServer` factory used to boot the API.

### `metadata`
Standard package information used by the Engine to identify the version and identity of the logic layer.

### `_meta`
The internal registry of CLI command metadata used by the `help` system to auto-generate documentation.
