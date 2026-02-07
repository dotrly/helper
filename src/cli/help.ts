import { COLORS } from '../lib/constants.js';
import * as doctor from './doctor.js';
import * as update from './update.js';
import * as uninstall from './uninstall.js';

export async function showHelp(currentVersion?: string) {
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
        { name: 'uninstall <id>', description: 'Remove a specific Relay app', category: 'App' },
        { name: 'publish', description: 'Package and publish the current app', category: 'App' },
        { name: 'apps', description: 'List installed apps', category: 'App' },
        { name: 'view <id> [--native]', description: 'Open runtime view URL or native window', category: 'App' },

        // Automatically aggregated from modules
        { name: 'doctor', description: 'Analyze system or remove Relay (doctor uninstall)', category: 'System' },
        { name: 'pair', description: 'Pair a mobile device', category: 'System' },
        { name: 'dev init', description: 'Create developer signing profile', category: 'System' },
        { name: 'sdk <subcommand>', description: 'Configure SDK settings', category: 'System' },
        update.metadata
    ];

    // Check for updates
    const versionToCheck = currentVersion || 'v0.0.0';
    const newVersion = await update.checkUpdate(versionToCheck);
    if (newVersion) {
        console.log(`\n\x1b[33m✨ A new version of Relay is available: v${newVersion}\x1b[0m`);
        console.log(`\x1b[33m   Run 'relay update' to install it.\x1b[0m`);
    }

    console.log(`\n${COLORS.PRIMARY}─── Relay Helper CLI ─────────────────────────────────────────${COLORS.RESET}`);
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
    console.log('Relay Helper CLI\n');
}

export const metadata = {
    name: 'help',
    description: 'Show this interactive help menu',
    category: 'System'
};
