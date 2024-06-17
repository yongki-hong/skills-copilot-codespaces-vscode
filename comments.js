// Create web server
//   - listen for requests
//   - read the file
//   - send the file to the browser
const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((request, response) => {
  console.log(request.url);
  if (request.url === '/') {
    const filePath = path.join(__dirname, 'index.html');
    fs.readFile(filePath, 'utf8', (error, data) => {
      response.end(data);
    });
  } else if (request.url === '/comments') {
    const filePath = path.join(__dirname, 'comments.json');
    fs.readFile(filePath, 'utf8', (error, data) => {
      response.end(data);
    });
  } else {
    response.end('404 Not Found');
  }
});

server.listen(3000);
console.log('Server is listening on port 3000');