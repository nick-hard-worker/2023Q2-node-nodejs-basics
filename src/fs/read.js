import * as fs from 'node:fs/promises';
import path from 'node:path';
import isExist from './common/check-exist.js';
import { SOURCE_FOLDER_RELATIVE_PATH } from './common/config.js';
const readingFilename = 'fileToRead.txt';

const read = async () => {
    const filePath = new URL(path.join(SOURCE_FOLDER_RELATIVE_PATH, readingFilename), import.meta.url);
    if (!(await isExist(filePath))) throw new Error('FS operation failed');

    const fileContent = await fs.readFile(filePath, { encoding: 'utf8' });
    console.log(fileContent);

};

await read();