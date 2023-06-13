import * as fs from 'node:fs/promises';
// import path from 'node:path';
import isExist from './utils/check-exist.js';
import { SOURCE_FOLDER_RELATIVE_PATH } from './utils/config.js';

const list = async () => {
    const folderPath = new URL(SOURCE_FOLDER_RELATIVE_PATH, import.meta.url);
    if (!(await isExist(folderPath))) throw new Error('FS operation failed');

    const files = await fs.readdir(folderPath);
    // for (const file of files) console.log
    console.table(files);


};

await list();