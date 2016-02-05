var cardModel = function (mongoose) {
  var cardSchema = mongoose.Schema({
    layout: String,
    name: String,
    names: Array,
    manaCost: String,
    cmc: Number,
    colors: Array,
    colorIdentity: Array,
    type: String,
    supertypes: Array,
    types: Array,
    subtypes: Array,
    rarity: String,
    text: String,
    flavor: String,
    artist: String,
    number: String,
    power: String,
    toughness: String,
    loyalty: Number,
    multiverseid: Number,
    variations: Array,
    imageName: String,
    watermark: String,
    border: String,
    timeshifted: Boolean,
    hand: Number,
    life: Number,
    reserved: Boolean,
    releaseDate: Date,
    starter: Boolean,
    rulings: Array,
    foreignNames: Array,
    printings: Array,
    originalText: String,
    originalType: String,
    legalities: Array,
    source: String
  });

  var Card = mongoose.model('card', cardSchema);

  return {
    get: function (id) {

    },
    save: function (data) {
      var card = new Card(data);
      card.save(function (err) {
        if (err) {
          console.log(err);
        }
      });
    }
  };
};

module.exports = cardModel;
