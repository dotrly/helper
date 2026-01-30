# CLI: Update

The `update` command allows the Relay Helper to self-update by fetching and running the latest official installer.

## Purpose
- Check for new versions via GitHub Releases API.
- Download the platform-specific installer (`install.sh` or `install.ps1`).
- Execute the installer to replace the current binary and logic layer.

## Exported Members
- `checkUpdate(currentVersion)`: An async function that returns the latest version tag if a newer version is available, or `null` otherwise.
- `updateSystem()`: The main execution function that performs the update process.
- `metadata`: Contains description and category for the automated help system.

## Update Flow
1. Check GitHub repository (`dotrly/dist`) for the latest release tag.
2. Compare the latest tag with the current version.
3. If an update is available, download the installer from the Relay distribution server.
4. Execute the installer with appropriate permissions.
