import { pipeline, Transform } from 'node:stream';

const transform = async () => {
  const reverse = new Transform({
    transform(chunk, encoding, callback) {
      const reverseString = chunk.toString()
        .trim()
        .split('')
        .reverse()
        .join('');
      callback(null, reverseString + '\n');
    }
  });

  pipeline(
    process.stdin,
    reverse,
    process.stdout,
    (err) => {
      if (err) console.error('Transform stream error', err);
    }
  );
};

await transform();