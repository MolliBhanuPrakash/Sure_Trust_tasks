// var fs=require('fs');
// var ch=fs.createReadStream('mbp.txt');
// ch.on('open',function(){
//     console.log('file opened');
// });

var fs=require('fs');
var events=require('events');
var emitter=new events.EventEmitter();
var myEvent=function(){
    console.log('event is called');
}
emitter.on('bhanu',myEvent);
emitter.emit('bhanu');
