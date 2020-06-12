var http = require('http')
var url = require('url')
http.createServer(function (request, response) {
  const req = url.parse(request.url, true).query
  const callback = req.callback
  response.writeHead(200, {'Content-Type': 'text/html'})
  response.end(`${callback}('Hello World')`)
}).listen(8080)

console.log('Server running at http://127.0.0.1:8080/')
