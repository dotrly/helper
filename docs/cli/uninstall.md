# CLI: Uninstall

The `uninstall` command provides a clean way to completely remove Relay from the host system.

## Purpose
- Terminate any running Relay processes.
- Remove the global CLI binary.
- Delete the Relay data directory (`RELAY_HOME`).

## Exported Members
- `uninstallSystem()`: The main execution function that performs the cleanup.
- `metadata`: Contains description and category for the automated help system.

## Processes Removed
1. **Stop Processes**: Uses `taskkill` (Windows) or `pkill` (Unix) to ensure no active sessions are running.
2. **Binary Cleanup**: Deletes the executable from `LOCALAPPDATA` (Windows) or `/usr/local/bin` (Unix).
3. **Data Removal**: Recursively deletes the `.relay` directory in the user's home folder.

> [!CAUTION]
> This action is irreversible. All local configurations and logs will be permanently deleted.
