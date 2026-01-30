# Lib: Constants

This module serves as the single source of truth for Relay's system definitions and visual styles.

## Key Exports

### `SYSTEM_ENDPOINTS`
A registry of URLs reserved by the Relay Engine (e.g., `/api/auth`, `/api/apps`).

### `COLORS`
The standardized ANSI color palette for the Relay terminal experience.
- `PRIMARY`: Magenta (#35)
- `SUCCESS`: Green (#32)
- `WARN`: Yellow (#33)
- `ERROR`: Red (#31)

### `CommandMetadata`
The TypeScript interface for CLI documentation used by the automated help system.
