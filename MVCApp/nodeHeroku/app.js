var http = require('http');
var port = 3000 || process.env.PORT

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!');
}).listen(port);