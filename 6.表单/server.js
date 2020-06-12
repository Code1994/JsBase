var http = require('http');
var url = require('url')
http.createServer(function (request, response) {
  const obj = url.parse(request.url, true)
  console.log(obj)
  response.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:8081')
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Hello World');
}).listen(8080);

console.log('Server running at http://127.0.0.1:8080/');
