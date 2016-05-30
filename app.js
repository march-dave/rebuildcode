var express = require('express');
var app = express();

var routes = require('./routes');

app.set('view engine', 'ejs');
// app.set('views', __dirname + '/views');

app.locals.pagetitle = "Awesome Website";

app.get('/', routes.index);
app.get('/about', routes.about);

app.get('*', function(req, res) {
  res.send("Bad Route");
});

var server = app.listen(3000, function() {
  console.log('Listening on port 3000');
});

// var http = require('http');
//
// var myServer = http.createServer(function(request, response) {
//     response.writeHead(200, { "Content-Type": "text/html"} );
//     response.write("<b>Hello</b> World");
//     response.end();
// });
//
// myServer.listen(3000);
//
// console.log("Go to http://localhost:3000 on your browser");
