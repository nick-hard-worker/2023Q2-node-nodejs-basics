import * as fs from 'node:fs/promises';
import path from 'node:path';
import isExist from './utils/check-exist.js';
import { SOURCE_FOLDER_RELATIVE_PATH as targetFolder } from './utils/config.js';
const fileName = 'fresh.txt';
const fileContent = 'I am fresh and young';

const create = async () => {
  const filePath = new URL(path.join(targetFolder, fileName), import.meta.url);
  if (await isExist(filePath)) throw new Error('FS operation failed');

  fs.writeFile(filePath, fileContent);
};

await create();