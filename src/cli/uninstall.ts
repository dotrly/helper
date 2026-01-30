import { exec } from 'child_process';
import { promisify } from 'util';
import fs from 'fs';
import path from 'path';
import os from 'os';

const execAsync = promisify(exec);

export async function uninstallSystem() {
    console.log('\n\x1b[31m─── Relay Uninstall ───────────────────────────────────────────\x1b[0m');
    console.log('Removing Relay from your system...\n');

    const relayHome = path.join(os.homedir(), '.relay');
    const binaryPath = process.platform === 'win32'
        ? path.join(process.env.LOCALAPPDATA || '', 'Relay', 'relay.exe')
        : '/usr/local/bin/relay';

    // 1. Stop processes
    try {
        const stopCmd = process.platform === 'win32' ? 'taskkill /F /IM relay.exe' : 'pkill -9 relay';
        await execAsync(stopCmd);
        console.log('✓ Stopped running processes');
    } catch (e) { }

    // 2. Remove binary
    try {
        if (fs.existsSync(binaryPath)) {
            if (process.platform !== 'win32') {
                await execAsync(`sudo rm -f ${binaryPath}`);
            } else {
                fs.unlinkSync(binaryPath);
            }
            console.log(`✓ Removed binary: ${binaryPath}`);
        }
    } catch (e: any) {
        console.error(`✗ Failed to remove binary: ${e.message}`);
    }

    // 3. Remove home dir
    try {
        if (fs.existsSync(relayHome)) {
            fs.rmSync(relayHome, { recursive: true, force: true });
            console.log(`✓ Removed data directory: ${relayHome}`);
        }
    } catch (e: any) {
        console.error(`✗ Failed to remove data directory: ${e.message}`);
    }

    console.log('\nRelay has been removed. Farewell! 🌉\n');
}

export const metadata = {
    name: 'uninstall',
    description: 'Completely remove Relay from your system',
    category: 'System'
};
