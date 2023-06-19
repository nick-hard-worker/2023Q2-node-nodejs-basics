import { Worker } from 'node:worker_threads';
import { cpus } from 'os';

const workerFile = './worker';
const workerFilePath = new URL(workerFile, import.meta.url);
const startParam = 10;

const createWorker = (data) => {
  return new Promise((resolve, reject) => {
    const worker = new Worker(workerFilePath, {
      workerData: data
    });

    worker.on('message', (msg) => {
      // console.log('threadId: ', worker.threadId, ' result:', msg);
      resolve({
        status: 'resolved',
        data: msg
      });
    });

    worker.on('error', (err) => {
      console.log(err.message);
      reject({
        status: 'error',
        data: null
      });
    });
  });
};

const performCalculations = async () => {
  const cpuQty = cpus().length;
  const workers = [];

  for (let idx = startParam; idx < startParam + cpuQty; idx++) {
    workers.push(createWorker(idx));
  }

  Promise.allSettled(workers).then((results) => {
    const taskResult = results
      .filter(oneResult => oneResult.status === 'fulfilled')
      .map(resolveResult => resolveResult.value);

    const rejected = results
      .filter(oneResult => oneResult.status === 'rejected')
      .map(resolveResult => resolveResult.reason);

    taskResult.push(...rejected);
    console.log(taskResult);
  });

};

await performCalculations();
// setTimeout(() => { console.log('nonBlock'); }, 3000);
