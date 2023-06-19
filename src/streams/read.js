import { createReadStream } from 'node:fs';
const inputFile = './files/fileToRead.txt';

const read = async () => {
    const filePath = new URL(inputFile, import.meta.url);
    const readableStream = createReadStream(filePath, 'utf-8');
    readableStream.pipe(process.stdout);

    readableStream.on('error', () => {
        throw new Error(`Read file error occur, file path:
        ${filePath}`);
    });
};

await read();