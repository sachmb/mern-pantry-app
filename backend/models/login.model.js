const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const loginSchema = new Schema({
  first_name: {
    type: String
  },
  last_name: {
    type: String
  },
  user_name: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    trim: true
  }
}, {
  timestamps: true,
});

const Login = mongoose.model('Login', loginSchema);

module.exports = Login;