var events = require('events');
var eventEmitter = new events.EventEmitter();

var connectHandler = function connected() {
    console.log('connect success!');
    eventEmitter.emit('data_recieved');
}

var recieveHandler = function recieved() {
    console.log('recieve data success!');
}
eventEmitter.on('connection', connectHandler);
eventEmitter.on('data_recieved', recieveHandler);

eventEmitter.emit('connection');
console.log('execute end!');
