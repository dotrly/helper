import * as doctor from './cli/doctor.js';
import * as help from './cli/help.js';
import { createRelayServer } from './server/index.js';

export const cli = {
    doctor: doctor.checkSystem,
    help: help.showHelp,
    _meta: {
        doctor: doctor.metadata,
        help: help.metadata
    }
};

export const server = {
    createRelayServer
};

export default {
    cli,
    server,
    metadata: {
        name: "Relay Helper",
        version: "0.1.0"
    }
};
