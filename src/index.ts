import * as doctor from './cli/doctor.js';
import * as help from './cli/help.js';
import * as update from './cli/update.js';
import * as uninstall from './cli/uninstall.js';
import { createRelayServer } from './server/index.js';

export const cli = {
    doctor: doctor.checkSystem,
    help: help.showHelp,
    update: update.updateSystem,
    uninstall: uninstall.uninstallSystem,
    _meta: {
        doctor: doctor.metadata,
        help: help.metadata,
        update: update.metadata,
        uninstall: uninstall.metadata
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
