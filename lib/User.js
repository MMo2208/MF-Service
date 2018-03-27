var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  email: {type: email, unique: true},
  username: {type: String, unique: true},
  password: {type: String},
  firstname: String,
  lastname: String
});

var User = mongoose.model('mfuser', userSchema);
module.exports = User;
