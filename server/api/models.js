const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  userId: String,                             // Auth0 user's unique identifier
  role: { type: String, default: 'user' },    // User, member, officer
  emails: [String],                           // Emails associated with account
  name: String,
  website: String,
  linkedIn: String,
  photoUrl: String,
});


const User = mongoose.model('User', userSchema);

module.exports = {
  User,
};
