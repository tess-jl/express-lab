const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  recipeId: {
    type: Number,
    required: true
  }, 
  dateOfEvent: {
    type: Date, 
    required: true
  },
  notes: {
    type: String, 
    required: true
  },
  rating: {
    type: Number, 
    required: true, 
    min: 0, 
    max: 10
  }
});

module.exports = mongoose.model('Attempt', schema);
