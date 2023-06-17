import * as fs from 'node:fs/promises';
import isExist from './common/check-exist.js';
import { SOURCE_FOLDER_RELATIVE_PATH } from './common/config.js';

const list = async () => {
    const folderPath = new URL(SOURCE_FOLDER_RELATIVE_PATH, import.meta.url);
    if (!(await isExist(folderPath))) throw new Error('FS operation failed');

    let files = await fs.readdir(folderPath, { withFileTypes: true });
    files = files
        .filter(file => file.isFile())
        .map(file => file.name);
    console.log(files);
};

await list();