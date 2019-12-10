const mongoose = require('mongoose');

const ingredientsSchema = new mongoose.Schema({
  amount: {
    type: Number,
    required: true
  },
  measurement: {
    type: String,
    required: true, 
    enum: ['teaspoon(s)', 'tablespoon(s)', 'cup(s)', 'ounce(s)', 'gram(s)']
  }, 
  name: {
    type: String, 
    required: true
  }
});

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  ingredients: [ingredientsSchema], 
  directions: [String]
});

module.exports = mongoose.model('Recipe', schema);
