import { createGunzip } from 'node:zlib';
import { createReadStream, createWriteStream } from 'node:fs';
import { pipeline } from 'node:stream';

const inputFilename = './files/archive.gz';
const outputFilename = './files/fileToCompress.txt';


const decompress = async () => {
    const inputFilePath = new URL(inputFilename, import.meta.url);
    const inputFileStream = createReadStream(inputFilePath);

    const outputFilePath = new URL(outputFilename, import.meta.url);
    const outputFileStream = createWriteStream(outputFilePath);

    const unzipStream = createGunzip();

    pipeline(
        inputFileStream,
        unzipStream,
        outputFileStream,
        (err) => {
            if (err) {
                console.error('Decompresses file error', err);
                return;
            }
            console.log('Completed successfully.');
        }
    );
};

await decompress();