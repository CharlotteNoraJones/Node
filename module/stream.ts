import fs from 'fs';

const readStream = fs.createReadStream('./docs/blog3.txt', { encoding: 'utf8' });
const writeStream = fs.createWriteStream('./docs/blog5.txt');

// readStream.on('data', (chunk) => {
//     console.log('---- NEW CHUNK ----');
//     console.log(chunk);
//     writeStream.write('\nNewChunk\n');
//     writeStream.write(chunk);
// });

// piping

readStream.pipe(writeStream);