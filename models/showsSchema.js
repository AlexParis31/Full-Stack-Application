const mongoose = require('mongoose');

const iconsSchema = new mongoose.Schema({
    Name: String,
    Url: String,
    Network: String,
    Genre: [String],
    Cast: [{type: String}],
    Rating: Number,
  })

const iconsCollection = mongoose.model('Applications', iconsSchema);

module.exports = iconsCollection;