// import { createServer } from 'node:http';
// import { readFile } from 'node:fs/promises';

var http = require('http');
var os = require('os');

console.log(os.homedir());
console.log(os.networkInterfaces());
console.log(os.freemem());
console.log(os.cpus());
console.log("Normal Log");
console.warn("Warn Log");
console.error("Error Log");
console.assert(true, "transaction Completed");
console.assert(false, "transaction Failed");

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  // res.end('{"id":1, "price": "200", "title": "School bag"}');

  if(req.url==="/"){
    res.write("this is default page");
    res.end();
  }

  if(req.url==="/product"){
    res.write("this is product page");
    res.end();
  }
});

// starts a simple http server locally on port 3000
server.listen(3000, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:3000');
});
