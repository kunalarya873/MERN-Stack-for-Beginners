
const events = require('events');
const { EventEmmitter } = events;
const eventEmitter = new EventEmmitter();

eventEmitter.on('event-1', function(param1){
    console.log('hi there');
    console.log(param1);
});

eventEmitter.emit('event-1', 'bye there');