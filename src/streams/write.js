import { createWriteStream } from 'node:fs';
const outputFile = './files/fileToWrite.txt';

const write = async () => {
    const filePath = new URL(outputFile, import.meta.url);
    const outputStream = createWriteStream(filePath);
    process.stdin.pipe(outputStream);
};

await write();