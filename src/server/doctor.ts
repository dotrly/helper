import os from 'os';

export function getSystemStats() {
    return {
        uptime: os.uptime(),
        load: os.loadavg(),
        memory: {
            free: os.freemem(),
            total: os.totalmem()
        },
        platform: os.platform(),
        timestamp: new Date().toISOString()
    };
}
