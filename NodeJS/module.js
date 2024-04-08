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
console.log(fs.readFileSync('./test.txt').toString());