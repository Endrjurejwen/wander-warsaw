const mongoose = require('mongoose');

const placeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Miejsce musi mieć swoją nazwę'],
    unique: true,
  },
  summary: {
    type: String,
    required: [true, 'Miejsce musi posiadać krótkie podsumowanie'],
  },
  district: {
    type: String,
    default: 'Warszawa i okolice',
  },
});

const Place = mongoose.model('Place', placeSchema);

module.exports = Place;
