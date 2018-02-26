const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  userId: String,
  role: String,
  name: String,
  website: String,
  linkedIn: String,
  photoUrl: String,
});


const User = mongoose.model('User', userSchema);

module.exports = {
  User,
};
