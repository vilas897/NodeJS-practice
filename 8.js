var http = require('http');
var count = 0;

var server = http.createServer(function(req, res){
  console.log('Request made by: ' + req.url);
  res.writeHead(200, 'text/plain');
  if(count == 0)
  res.end("Thanks for the request ;) ");
  else if(count == 1){
    res.end("Thanks again");
  }
  else
  { res.end("Will you please stop disturbing me? do your work")}
   count++;
});

server.listen(3000,'127.0.0.1');
console.log('Currently server listening to 127.0.0.1:3000');
