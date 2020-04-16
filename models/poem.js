const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const poemSchema = new Schema({
  poem: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = poem = mongoose.model('poem', poemSchema);