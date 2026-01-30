import { exec } from 'child_process';
import { promisify } from 'util';
import os from 'os';

const execAsync = promisify(exec);

export async function checkSystem() {
    console.log('\n\x1b[35m─── Relay Doctor ──────────────────────────────────────────────\x1b[0m');
    console.log('Validating your environment for the Thin Window bridge...\n');

    const stats = {
        os: `${os.type()} ${os.release()}`,
        arch: os.arch(),
        memory: `${(os.freemem() / 1024 / 1024 / 1024).toFixed(1)}GB free / ${(os.totalmem() / 1024 / 1024 / 1024).toFixed(1)}GB total`,
        node: process.version
    };

    console.log(`  \x1b[37mSystem:\x1b[0m      ${stats.os} (${stats.arch})`);
    console.log(`  \x1b[37mMemory:\x1b[0m      ${stats.memory}`);
    console.log(`  \x1b[37mNode:\x1b[0m        ${stats.node}`);

    // Check Ollama
    try {
        const res = await fetch('http://localhost:11434/api/tags');
        if (res.ok) {
            console.log('  \x1b[32m✓ Ollama:\x1b[0m    Running (Local AI enabled)');
        } else {
            console.log('  \x1b[31m✗ Ollama:\x1b[0m    Responding but unexpected status');
        }
    } catch (e) {
        console.log('  \x1b[33m⚠ Ollama:\x1b[0m    Not running (AI features disabled)');
    }

    // Check Git
    try {
        await execAsync('git --version');
        console.log('  \x1b[32m✓ Git:\x1b[0m       Installed (Templates available)');
    } catch (e) {
        console.log('  \x1b[31m✗ Git:\x1b[0m       Not installed (App creation will fail)');
    }

    console.log('\n\x1b[35m───────────────────────────────────────────────────────────────\x1b[0m\n');
}

export const metadata = {
    name: 'doctor',
    description: 'Analyze the bridge environment and local AI status',
    category: 'System'
};
