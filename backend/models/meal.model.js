const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mealSchema = new Schema({
  mealName: { type: String, required: true, },
  ingredients: [{
    type: String, required: true
  }],
  imageURL: {type: String, required: true},
}, {
  timestamps: true,

});

const Meal = mongoose.model('Meal', mealSchema);

module.exports = Meal;