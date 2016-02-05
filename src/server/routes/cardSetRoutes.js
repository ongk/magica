var express = require('express'),
  fs = require('fs');

var cardSetRoutes = function (mongoose, busboy) {
  var cardSetRouter = express.Router();
  var cardSetModel = require('../models/cardSet.js')(mongoose);

  cardSetRouter.route('/cardSets')
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

          res.status(400).send('upload finished');
        });
      });

      req.pipe(req.busboy);
    });

  return cardSetRouter;
};

module.exports = cardSetRoutes;
