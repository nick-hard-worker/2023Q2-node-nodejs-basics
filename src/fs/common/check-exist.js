import * as fs from 'node:fs/promises';

export default async function isExist(path) {
  return await fs.access(path)
    .then(() => true)
    .catch(() => false);
};
