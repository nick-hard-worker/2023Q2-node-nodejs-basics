import * as fs from 'node:fs/promises';
import path from 'node:path';
import isExist from './utils/check-exist.js';
import { SOURCE_FOLDER_RELATIVE_PATH } from './utils/config.js';
const removeFilename = 'fileToRemove.txt';

const remove = async () => {
    const filePath = new URL(path.join(SOURCE_FOLDER_RELATIVE_PATH, removeFilename), import.meta.url);
    if (!(await isExist(filePath))) throw new Error('FS operation failed');

    fs.rm(filePath);
};

await remove();