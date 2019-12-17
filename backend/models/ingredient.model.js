const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ingredientSchema = new Schema({
  ingredient: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
}, {
  timestamps: true,
});

const Ingredient = mongoose.model('Ingredient', ingredientSchema);

module.exports = Ingredient;