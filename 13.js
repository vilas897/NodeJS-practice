var express = require('express');
var fs = require('fs');
var app = express();
var bodyParser = require('body-parser');

app.set('view engine', 'ejs');

var urlencodedParser = bodyParser.urlencoded({ extended: false });
 
app.use('/assets', express.static('assets'));

app.get('/', function(req, res){
  res.render('welcome');
});

app.get('/contact', function(req, res){
  res.render('contact', {qs: req.query});
});

app.post('/contact', urlencodedParser, function(req, res){
  console.log(req.body);
  res.render('contactsuccess', {data: req.body});
});

app.get('/profile/:name', function(req, res){
   var data = { age: 19, institute: "NITK", hobbies: [ 'Quora', 'Competitive Coding', 'Eating']};
   res.render('profile', {person: req.params.name, data: data});
});

app.listen(3000);
