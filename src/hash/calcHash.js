import fs from 'node:fs/promises';
import { createHash } from 'node:crypto';
const filename = './files/fileToCalculateHashFor.txt';

const calculateHash = async () => {
    const filePath = new URL(filename, import.meta.url);
    const buff = await fs.readFile(filePath);
    const hash = createHash("sha256").update(buff).digest("hex");
    console.log(hash);
};

await calculateHash();