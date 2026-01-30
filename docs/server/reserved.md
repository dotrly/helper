# Server: Reserved

Defines the security boundary for the Relay Engine.

## Purpose
This module protects the core system API by:
1. Listing all routes managed by the private Engine.
2. Providing a `getReservedApp()` middleware that intercepts and forbids extensions from overriding these critical paths.

## Critical Routes
- `/`
- `/api/auth`
- `/api/apps`
- `/api/status`
- `/api/config`
