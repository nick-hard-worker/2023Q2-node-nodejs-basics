import * as fs from 'node:fs/promises';
import path from 'node:path';

const fileName = 'fresh.txt';
const relativePath = './files';
const filePath = new URL(path.join(relativePath, fileName), import.meta.url);

const fileContent = 'I am fresh and young';

const create = async () => {
  const isFileExist = await fs.access(filePath)
    .then(() => true)
    .catch(() => false);

  if (isFileExist) throw new Error('FS operation failed');

  fs.writeFile(filePath, fileContent);
};

await create();