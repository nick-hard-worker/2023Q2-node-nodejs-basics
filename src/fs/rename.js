import * as fs from 'node:fs/promises';
import path from 'node:path';
import * as url from 'node:url';
import isExist from './utils/check-exist.js';
import { SOURCE_FOLDER_RELATIVE_PATH } from './utils/config.js';

const modulePath = url.fileURLToPath(new URL(import.meta.url));
const __dirname = path.dirname(modulePath);
const oldFilename = 'wrongFilename.txt';
const newFilename = 'properFilename.md';

const rename = async () => {
    const folderPath = path.join(__dirname, SOURCE_FOLDER_RELATIVE_PATH);
    const oldFilePath = path.join(folderPath, oldFilename);
    const newFilePath = path.join(folderPath, newFilename);

    if (!(await isExist(oldFilePath))
        || await isExist(newFilePath)) throw new Error('FS operation failed');

    fs.rename(oldFilePath, newFilePath);
};

await rename();
