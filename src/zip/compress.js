import { createGzip } from 'node:zlib';
import { createReadStream, createWriteStream } from 'node:fs';
import { pipeline } from 'node:stream';

// const inputFilename = './files/fileToCompress.txt';
const inputFilename = './files/1.xls';
const outputFilename = './files/archive.gz';

const compress = async () => {
  const inputFilePath = new URL(inputFilename, import.meta.url);
  const inputFileStream = createReadStream(inputFilePath);

  const outputFilePath = new URL(outputFilename, import.meta.url);
  const outputFileStream = createWriteStream(outputFilePath);

  const archiveStream = createGzip();

  pipeline(
    inputFileStream,
    archiveStream,
    outputFileStream,
    (err) => {
      if (err) {
        console.error('Compresses file error', err);
        return;
      }
      console.log('Completed successfully.');
    }
  );
};

await compress();