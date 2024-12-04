const { EventEmitter } = require('events');
const fs = require('fs');

// Increase the limit globally (use cautiously)
EventEmitter.defaultMaxListeners = 15;

// Or increase the limit for a specific emitter
const readStream = fs.createReadStream('example.txt');
readStream.setMaxListeners(15);

// Example of attaching listeners
for (let i = 0; i < 12; i++) {
  readStream.on('data', (chunk) => {
    console.log(`Listener ${i} received ${chunk.length} bytes`);
  });
}

readStream.on('end', () => {
  console.log('Finished reading the file');
});

// Simulate reading a file
setTimeout(() => {
  readStream.emit('data', Buffer.from('Example data'));
  readStream.emit('end');
}, 100);

console.log(`Current max listeners: ${readStream.getMaxListeners()}`);