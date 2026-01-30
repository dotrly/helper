import { checkSystem } from './cli/doctor.js';
import { createRelayServer } from './server/index.js';

export const cli = {
    doctor: checkSystem
};

export const server = {
    createRelayServer
};

export default {
    cli,
    server,
    metadata: {
        name: "Relay Official Extension",
        version: "0.1.0"
    }
};
