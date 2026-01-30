/**
 * Reserved System API Endpoints
 * These routes are handled by the Relay Engine or Core Helper.
 */
export const SYSTEM_ENDPOINTS = {
    HEALTH: '/',
    AUTH: '/api/auth',
    APP_LIST: '/api/apps',
    STATUS: '/api/status',
    CONFIG: '/api/config'
};

export const COLORS = {
    PRIMARY: '\x1b[35m', // Purple
    SUCCESS: '\x1b[32m', // Green
    WARN: '\x1b[33m',    // Yellow
    ERROR: '\x1b[31m',   // Red
    RESET: '\x1b[0m'
};
