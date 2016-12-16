var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
  console.log('Request made by: ' + req.url);
  res.writeHead(200, 'text/plain');
  var myReadStream = fs.createReadStream(__dirname + '/readme.txt' , 'utf8');
  myReadStream.pipe(res);
});

server.listen(3000,'127.0.0.1');
console.log('Currently server listening to 127.0.0.1:3000');
