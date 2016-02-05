var express = require('express');
var bodyParser = require('body-parser'),
  busboy = require('connect-busboy'),
  path = require('path'),
  mongoose = require('mongoose');

var app = express();
var port = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost/magica');

// app.use(bodyParser());
app.use(busboy());

// serve index.html
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

// import new cards
var cardsRouter = require('./server/routes/cardRoutes');
app.use('/card', cardsRouter(mongoose, busboy));

// import new card sets
var cardSetRouter = require('./server/routes/cardSetRoutes');
app.use('/card_set', cardSetRouter(mongoose, busboy));

app.listen(port, function () {
  console.log('Listening on port: ' + port);
});
