import { Hono } from 'hono';
import { cors } from 'hono/cors';

export async function createRelayServer() {
    const app = new Hono();

    app.use('/*', cors());

    app.get('/', (c) => c.json({
        status: 'ok',
        version: '0.1.0',
        engine: 'Relay Helper (Engine Attached)'
    }));

    app.get('/api/info', (c) => {
        return c.json({
            environment: process.env.NODE_ENV || 'development',
            platform: process.platform,
            arch: process.arch
        });
    });

    app.get('/api/doctor', (c) => {
        const { getSystemStats } = require('./doctor.js'); // Dynamic load for example
        return c.json(getSystemStats());
    });

    return app;
}
