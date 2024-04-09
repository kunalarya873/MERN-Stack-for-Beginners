const fs = require('fs');

//readStream
let readStream = fs.createReadStream("./data.txt");
let content = [];

readStream.on("data", function (buffer) {
    content.push(buffer);
});

readStream.on("end", function () {
    let actualData = Buffer.concat(content).toString();
    console.log(actualData);
});

//writeStream
const writeStream = fs.createWriteStream("output.txt");
readStream.on("data", function (buffer) {
    writeStream.write(buffer.toString());
});

// for reading from  a file and writing to another file can be done using keyword  pipe in nodejs
fs.createReadStream("./input.txt").pipe(fs.createWriteStream("output2.txt"));