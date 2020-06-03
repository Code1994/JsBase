var http = require('http');
http.createServer(function (request, response) {
  console.log(request)
  response.setHeader()
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Hello World');
}).listen(8080);

console.log('Server running at http://127.0.0.1:8080/');
