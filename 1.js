var events = require('events');

var Emitter = new events.EventEmitter();

Emitter.on('test1', function() {
console.log('test 1 occurred')} );

Emitter.on('test2', function() {
console.log('test 2 occurred')}) ;

Emitter.emit('test2');
