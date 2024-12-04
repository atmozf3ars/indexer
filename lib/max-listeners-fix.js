const { EventEmitter } = require('events');
const stream = require('stream');

// Increase the default max listeners for all EventEmitters
EventEmitter.defaultMaxListeners = 999;

// Increase max listeners for streams specifically
stream.Stream.prototype.setMaxListeners(999);

console.log(`Default max listeners: ${EventEmitter.defaultMaxListeners}`);
console.log(`Stream max listeners: ${new stream.Stream().getMaxListeners()}`);

// Example of creating a readable stream with increased max listeners
const readableStream = new stream.Readable();
readableStream.setMaxListeners(999);
console.log(`Readable stream max listeners: ${readableStream.getMaxListeners()}`);