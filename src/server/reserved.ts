import { Hono } from 'hono';

/**
 * System Reserved Endpoints
 * 
 * These routes are maintained by the Relay Engine. 
 * Any attempt to redefine these in public extensions will result in a runtime conflict.
 * 
 * Developers: Always check this list before creating new API routes.
 */

export const RESERVED_ROUTES = [
    '/',             // Core Health Check
    '/api/auth',     // Secure Authentication
    '/api/apps',     // App Manifest Management
    '/api/status',   // System Presence
    '/api/config'    // Engine Configuration
];

export function getReservedApp() {
    const app = new Hono();

    RESERVED_ROUTES.forEach(route => {
        app.all(route, (c) => c.json({
            error: 'RESERVED_ENDPOINT',
            message: 'This endpoint is reserved by the Relay Engine.'
        }, 403));
    });

    return app;
}
