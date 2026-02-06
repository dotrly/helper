import { exec } from 'child_process';
import { promisify } from 'util';
import { PROJECT_DOMAINS } from '../../../../project.domains';

const execAsync = promisify(exec);

export async function checkUpdate(currentVersion: string) {
    try {
        const res = await fetch(`https://api.github.com/repos/${PROJECT_DOMAINS.releasesRepo}/releases/latest`);
        if (!res.ok) return null;

        const data = (await res.json()) as { tag_name: string };
        const latest = data.tag_name.replace('v', '');

        if (latest !== currentVersion.replace('v', '')) {
            return latest;
        }
    } catch (e) {
        // Silently fail if offline
    }
    return null;
}

export async function updateSystem() {
    console.log('\n\x1b[36m─── Relay Update ──────────────────────────────────────────────\x1b[0m');
    console.log('Fetching latest installer...\n');

    const updateUrlUnix = process.env.RELAY_UPDATE_URL_UNIX || `${PROJECT_DOMAINS.installBaseUrl}/install.sh`;
    const updateUrlWin = process.env.RELAY_UPDATE_URL_WIN || `${PROJECT_DOMAINS.installBaseUrl}/install.ps1`;

    const cmd = process.platform === 'win32'
        ? `powershell -ExecutionPolicy Bypass -Command "iwr -useb ${updateUrlWin} | iex"`
        : `curl -fsSL ${updateUrlUnix} | bash`;

    try {
        const { stdout, stderr } = await execAsync(cmd);
        if (stdout) console.log(stdout);
        if (stderr) console.error(stderr);
    } catch (e: any) {
        console.error('\x1b[31mUpdate failed:\x1b[0m', e.message);
    }
}

export const metadata = {
    name: 'update',
    description: 'Update Relay to the latest version',
    category: 'System'
};
