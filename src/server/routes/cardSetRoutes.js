var express = require('express'),
  fs = require('fs');

var cardSetRoutes = function (mongoose) {
  var cardSetRouter = express.Router();
  var cardSetModel = require('../models/cardSet.js')(mongoose);

  cardSetRouter.route('/')
    .get(function (req, res) {
      cardSetModel.all()
        .then(function (cardSets) {
          res.status(200).json(cardSets);
        }, function (reason) {
          res.status(500).send('Error retrieving card sets: ' + reason);
        });
    });

  cardSetRouter.route('/:id')
    .get(function (req, res) {
      var id = req.params.id;
      cardSetModel.get(id)
        .then(function (cardSet) {
          res.status(200).json(cardSet);
        }, function (reason) {
          res.status(500).send('Error retrieving card set: ' + reason);
        });
    });

  cardSetRouter.route('/bulk')
    .post(function (req, res) {
      req.busboy.on('file', function (fieldname, file, filename, encoding, mimetype) {
        var data = '';
        file.on('data', function (chunk) {
          data += chunk;
        });

        file.on('end', function () {
          var content = JSON.parse(data);
          for (var cardSetName in content) {
            cardSetModel.save(content[cardSetName]);
          }

          res.status(200).send('upload finished');
        });
      });

      req.pipe(req.busboy);
    });

  return cardSetRouter;
};

module.exports = cardSetRoutes;
