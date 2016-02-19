var express = require('express'),
  fs = require('fs');

var cardRoutes = function (mongoose) {
  var cardsRouter = express.Router();
  var cardModel = require('../models/card.js')(mongoose);

  cardsRouter.route('/')
    .post(function (req, res) {
      var newCard = {};

      req.busboy.on('field', function (key, val) {
        newCard[key] = val;
      });

      req.busboy.on('finish', function () {
        cardModel.save(newCard)
          .then(function (card) {
            res.status(200).send('New card with ID ' + card._id + ' added');
          }, function (reason) {
            res.status(500).send('Unable to add new card: ' + reason);
          });
      });

      req.pipe(req.busboy);
    });

  cardsRouter.route('/:id')
    .get(function (req, res) {
      var id = req.params.id;
      cardModel.get(id)
        .then(function (card) {
          res.status(200).json(card);
        }, function (reason) {
          res.status(500).send('Error retrieving card: ' + reason);
        });
    })
    .delete(function (req, res) {
      var id = req.params.id;
      cardModel.remove(id)
        .then(function () {
          res.status(200).send('Card with ID ' + id + ' removed');
        }, function (reason) {
          res.status(500).send('Error removing card: ' + reason);
        });
    });

  cardsRouter.route('/bulk')
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
        });
      });

      req.busboy.on('finish', function () {
        res.status(200).send('Bulk upload finished');
      });

      req.pipe(req.busboy);
    });

  return cardsRouter;
};

module.exports = cardRoutes;
