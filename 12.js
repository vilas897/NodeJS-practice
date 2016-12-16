var http = require('http');
var fs = require('fs');


var server = http.createServer(function(req, res){
  console.log('Request made by: ' + req.url);
  res.writeHead(200, 'application/json');
  var myObj = { name : "Vilas", college: "NITK Surathkal", course: "B.tech"};
  res.end(JSON.stringify(myObj));
});

server.listen(3000,'127.0.0.1');
console.log('Currently server listening to 127.0.0.1:3000');
