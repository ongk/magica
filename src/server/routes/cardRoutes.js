var express = require('express'),
  fs = require('fs');

var cardRoutes = function (mongoose, busboy) {
  var cardsRouter = express.Router();
  var cardModel = require('../models/card.js')(mongoose);

  cardsRouter.route('/cards')
    .post(function (req, res) {
      req.busboy.on('file', function (fieldname, file, filename, encoding, mimetype) {
        var data = '';
        file.on('data', function (chunk) {
          data += chunk;
        });

        file.on('end', function () {
          var content = JSON.parse(data);
          for (var cardName in content) {
            cardModel.save(content[cardName]);
          }

          res.status(400).send('upload finished');
        });
      });

      req.pipe(req.busboy);
    });

  return cardsRouter;
};

module.exports = cardRoutes;
