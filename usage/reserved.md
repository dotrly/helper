# Reserved Endpoints

The Relay Engine reserves several core API paths for internal infrastructure, security, and lifecycle management.

## Critical Paths
The following routes are controlled by the Engine and **cannot** be used for custom logic:

| Route | Description |
| :--- | :--- |
| `/` | Core Health Handshake |
| `/api/auth` | Mobile Device Authentication |
| `/api/apps` | Management of `.rly` application bundles |
| `/api/status` | Real-time presence and availability |
| `/api/config` | Engine-level configuration synchronization |

## Conflict Prevention
If you attempt to define a route that matches a reserved path, the Relay Engine will block the request and return:
```json
{
  "error": "RESERVED_ENDPOINT",
  "message": "This endpoint is reserved by the Relay Engine."
}
```

> [!IMPORTANT]
> Always prefix your custom features (e.g., `/api/my-feature`) and check this list before implementing new routes.
