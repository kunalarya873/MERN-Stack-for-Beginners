// Path Module
const { dir } = require('console');
let path = require('path');
let myPath = '/Users/kunalarya/Development/MERN-Stack-for-Beginners/initial.js';
let parsedPath = path.parse(myPath);
let dirname = path.dirname(myPath);
let ext = path.extname(myPath);
let basename = path.basename(myPath);
console.log(parsedPath);
console.log(dirname);
console.log(ext);
console.log(basename);

//os Module
