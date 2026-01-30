import { exec } from 'child_process';
import { promisify } from 'util';
import os from 'os';

const execAsync = promisify(exec);

export async function checkSystem() {
    console.log('\x1b[34m[relay-doctor]\x1b[0m Analyzing environment...');

    const stats = {
        os: `${os.type()} ${os.release()}`,
        arch: os.arch(),
        memory: `${(os.freemem() / 1024 / 1024 / 1024).toFixed(1)}GB free of ${(os.totalmem() / 1024 / 1024 / 1024).toFixed(1)}GB`,
        node: process.version
    };

    console.log(`- OS: ${stats.os}`);
    console.log(`- Arch: ${stats.arch}`);
    console.log(`- Memory: ${stats.memory}`);
    console.log(`- Node: ${stats.node}`);

    // Check Ollama
    try {
        const res = await fetch('http://localhost:11434/api/tags');
        if (res.ok) {
            console.log('\x1b[32m✓\x1b[0m Ollama is running');
        } else {
            console.log('\x1b[31m✗\x1b[0m Ollama is responding but not ok');
        }
    } catch (e) {
        console.log('\x1b[33m⚠\x1b[0m Ollama is NOT running (Local AI features disabled)');
    }

    // Check Git
    try {
        await execAsync('git --version');
        console.log('\x1b[32m✓\x1b[0m Git is installed');
    } catch (e) {
        console.log('\x1b[31m✗\x1b[0m Git is NOT installed (Required for templates)');
    }
}
