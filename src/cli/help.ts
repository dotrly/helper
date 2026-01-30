import { COLORS } from '../lib/constants.js';
import * as doctor from './doctor.js';

export async function showHelp() {
    const commands = [
        // Engine Commands (Manual entries as they are private)
        { name: 'start', description: 'Start the Helper Server (daemon mode)', category: 'Engine' },
        { name: 'stop', description: 'Stop the running Helper Server', category: 'Engine' },
        { name: 'restart', description: 'Restart the Helper Server', category: 'Engine' },
        { name: 'status', description: 'Check Helper Server status', category: 'Engine' },
        { name: 'attach', description: 'Attach to local logic (Development mode)', category: 'Engine' },

        // App Commands (Templates for other devs to follow)
        { name: 'create-app <name>', description: 'Create a new Relay App', category: 'App' },
        { name: 'build', description: 'Build the current App', category: 'App' },
        { name: 'install [file]', description: 'Install a .rly app bundle', category: 'App' },
        { name: 'apps', description: 'List installed apps', category: 'App' },

        // Automatically aggregated from modules
        doctor.metadata,
        { name: 'pair', description: 'Pair a mobile device', category: 'System' },
        { name: 'sdk <subcommand>', description: 'Configure SDK settings', category: 'System' }
    ];

    console.log(`\n${COLORS.PRIMARY}─── Relay CLI Help ───────────────────────────────────────────${COLORS.RESET}`);
    console.log('Usage: relay <command> [args]\n');

    const categories = ['Engine', 'App', 'System'];

    categories.forEach(cat => {
        const catCmds = commands.filter(c => c.category === cat);
        if (catCmds.length > 0) {
            console.log(`${COLORS.PRIMARY}${cat} Commands:${COLORS.RESET}`);
            catCmds.forEach(cmd => {
                console.log(`  ${cmd.name.padEnd(18)} ${cmd.description}`);
            });
            console.log('');
        }
    });

    console.log(`${COLORS.PRIMARY}───────────────────────────────────────────────────────────────${COLORS.RESET}`);
    console.log('Building the bridge for professional tools.\n');
}

export const metadata = {
    name: 'help',
    description: 'Show this interactive help menu',
    category: 'System'
};
