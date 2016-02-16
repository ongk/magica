var express = require('express');
var bodyParser = require('body-parser'),
  busboy = require('connect-busboy'),
  path = require('path'),
  mongoose = require('mongoose');

var app = express();
var port = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost/magica');

app.use(bodyParser());
app.use(busboy());
app.use('/', express.static(__dirname + '/client'));

// import new cards
var cardsRouter = require('./server/routes/cardRoutes');
app.use('/api/card', cardsRouter(mongoose));

// import new card sets
var cardSetRouter = require('./server/routes/cardSetRoutes');
app.use('/api/card_set', cardSetRouter(mongoose));

app.listen(port, function () {
  console.log('Listening on port: ' + port);
});
