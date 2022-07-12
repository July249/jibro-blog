const mongoose = require('mongoose');

const counterSchema = new mongoose.Schema({
  totalCount: {
    type: Number,
    required: true,
  },
  date: {
    type: String,
  },
});

module.exports = mongoose.model('counter', counterSchema);
