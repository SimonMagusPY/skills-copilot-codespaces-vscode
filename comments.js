// Create web server
// Create a web server that listens on port 3000.
// The server should respond with the text "Hello, World!" for requests to the root URL: "/".
// The server should respond with the text "Hello, Comments!" for requests to the URL "/comments".
// The server should respond with a 404 error for all other URLs.
// Use the createServer method from the http module to create the server.
// Use the listen method to listen on port 3000.
// Use the writeHead method to set the status code and content type of the response.
// Use the end method to send the response.
// Use the request and response objects to read and write data to the client.

const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, World!');
  } else if (req.url === '/comments') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, Comments!');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  }
});

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});