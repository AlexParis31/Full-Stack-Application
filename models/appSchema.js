const mongoose = require('mongoose');

const iconsSchema = new mongoose.Schema({
    name: String,
    url: String,
    version: Number
  })

const iconsCollection = mongoose.model('Applications', iconsSchema);

module.exports = iconsCollection;