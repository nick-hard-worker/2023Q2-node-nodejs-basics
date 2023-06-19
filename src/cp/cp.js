import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const fileName = './files/script.js';
const cpFilePath = fileURLToPath(new URL(fileName, import.meta.url));

const spawnChildProcess = async (args) => {
    const command = 'node';
    const childProcess = spawn('node', [cpFilePath, ...args], { stdio: 'inherit' });
};

spawnChildProcess(['someArgument1', 'someArgument2', 'someArgument3']);
