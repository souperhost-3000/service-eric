const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const imageSchema = new mongoose.Schema({
  listing_id: Number,
  images: [String],
});

const Image = mongoose.model('Image', imageSchema);

module.exports = Image;
