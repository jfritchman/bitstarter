var express = require('express');

var app = express.createServer(express.logger());

fs = require('fs');

app.get('/', function(request, response) {
	var data;
  data = fs.readFileSync('index.html');
  response.send(data.toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});