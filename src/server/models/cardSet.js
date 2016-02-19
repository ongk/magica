var cardSetModel = function (mongoose) {
  var cardSetSchema = mongoose.Schema({
    name: String,
    code: String,
    gathererCode: String,
    oldCode: String,
    magicCardsInfoCode: String,
    releaseDate: Date,
    border: String,
    type: String,
    block: String,
    onlineOnly: Boolean,
    booster: Array
  });

  var CardSet = mongoose.model('cardSet', cardSetSchema);

  return {
    all: function () {
      return CardSet.find().exec();
    },
    get: function (id) {
      return CardSet.findOne({ _id: id }).exec();
    },
    save: function (data) {
      var cardSet = new CardSet(data);
      cardSet.save(function (err) {
        if (err) {
          console.log(err);
        }
      });
    }
  };
};

module.exports = cardSetModel;
