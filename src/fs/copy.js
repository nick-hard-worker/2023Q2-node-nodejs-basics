import * as fs from 'node:fs/promises';
import path from 'node:path';
import * as url from 'node:url';
import isExist from './common/check-exist.js';
import { SOURCE_FOLDER_RELATIVE_PATH, DEST_FOLDER_RELATIVE_PATH } from './common/config.js';

const modulePath = url.fileURLToPath(new URL(import.meta.url));
const __dirname = path.dirname(modulePath);

const copy = async () => {
  const sourcePath = path.join(__dirname, SOURCE_FOLDER_RELATIVE_PATH);
  const destinationPath = path.join(__dirname, DEST_FOLDER_RELATIVE_PATH);

  if (!(await isExist(sourcePath))
    || await isExist(destinationPath)) throw new Error('FS operation failed');

  realCopy(sourcePath, destinationPath);
};

const realCopy = async (sourceFolder, destinationFolder) => {
  await fs.mkdir(destinationFolder);
  const files = await fs.readdir(sourceFolder, { withFileTypes: true });

  for (const file of files) {
    const source = path.join(sourceFolder, file.name);
    const dest = path.join(destinationFolder, file.name);
    if (file.isFile()) fs.copyFile(source, dest);
    else realCopy(source, dest);
  }
};

await copy();
