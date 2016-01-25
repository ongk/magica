var express = require('express'),
  path = require('path');

var app = express();
var port = process.env.PORT || 3000;

// serve index.html
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(port, function () {
  console.log('Listening on port: ' + port);
});
