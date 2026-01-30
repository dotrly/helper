# CLI: Doctor

The `doctor` command is a diagnostic tool designed to validate the local environment and ensure the "Thin Window" bridge is functioning correctly.

## Purpose
- Check OS and hardware compatibility.
- Verify Node.js version.
- Validate **Ollama** status for local AI features.
- Check **Git** installation for application template support.

## Exported Members
- `checkSystem()`: The main execution function.
- `metadata`: Contains description and category for the automated help system.

## Style
Uses purple borders and status icons (V, !, X) to provide a premium terminal experience.
