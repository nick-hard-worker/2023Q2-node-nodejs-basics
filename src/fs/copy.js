import * as fs from 'node:fs/promises';
import path from 'node:path';
import * as url from 'node:url';

const modulePath = url.fileURLToPath(new URL(import.meta.url));
const __dirname = path.dirname(modulePath);
const sourceRelativePath = './files';
const destinationRelativePath = './files_copy';

const copy = async () => {
  const sourcePath = path.join(__dirname, sourceRelativePath);
  const destinationPath = path.join(__dirname, destinationRelativePath);

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

const isExist = async (path) => {
  return await fs.access(path)
    .then(() => true)
    .catch(() => false);
};

await copy();
