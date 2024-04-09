// Path Module
//use in the whole path system
let path = require('path');
let myPath = '/Users/kunalarya/Development/MERN-Stack-for-Beginners/initial.js';
let parsedPath = path.parse(myPath);
let dirname = path.dirname(myPath);
let ext = path.extname(myPath);
let basename = path.basename(myPath);
// console.log(parsedPath);
// console.log(dirname);
// console.log(ext);
// console.log(basename);




//os Module
//use to know about the system

let os = require('os');
// console.log(os.type());
// console.log(os.arch());
// console.log(os.hostname());
// console.log(os.platform());



//fs module
//module is used for read write in the file
let fs = require('fs');
fs.writeFileSync('test.txt', 'Hello Testing');
fs.appendFileSync('test.txt', 'Append');
// console.log(fs.readFileSync('./test.txt').toString());
//fs.unlinkSync('./test.txt'); for deleting the file
//file Cration other option
fs.writeFile('test2.txt', 'Second file testing', function(error){
    if(!error){
        // console.log('File created succesfuly');
    }
});



//event module
//use to perform the module

const { EventEmitter }  = require('events');
const eventEmitter = new EventEmitter();
eventEmitter.on('event-1', function(param1){
    // console.log('hi there');
    // console.log(param1);
});

// eventEmitter.emit('event-1', 'bye there');



//http module

let http = require('http');
let server = http.createServer((request, response) => {
    if(request.url === '/about'){
        response.write('This is home page');
    }
    response.end();
});
server.on('connection', function(){
    console.log('Connecting...');
});
server.listen(3000, () => {
    console.log('Server is running');
});