var events  = require('events');
var util = require('util');

var person = function(name) {
this.name = name;
}

util.inherits(person, events.EventEmitter);

var james = new person('james');
var vilas = new person('vilas');
var shaun = new person('shaun');

var people = [james, vilas, shaun];

people.forEach(function(p){
p.on('speak', function(msg){
  console.log(p.name + ' says ' + msg);
});
});

shaun.emit('speak','bye');
