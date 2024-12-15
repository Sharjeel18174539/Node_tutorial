// var greets = require('./greets')
// greets.english();
// greets.spanish();
// var greet = require('./greet1');
// greet();
// var greet2 = require('./greet2').greet;
// greet2();
// var greet3 = require('./greet3');
// greet3.greet();
// greet3.greeting='Changed Hello Sharjeel';
// var greet3b=require('./greet3');
// greet3b.greet();


var Emitter=require('events');
var configEmitter = require('./config').events;
var emtr=new Emitter();

emtr.on(configEmitter.GREET, function(){
    console.log('Somewhere, someone said hello');
});
emtr.on(configEmitter.GREET, function(){
    console.log('A greeting occurred');
});

console.log("Hello !");
emtr.emit(configEmitter.GREET);
