const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const userSchema = new Schema({
  userId: String,                                       // Auth0 user's unique identifier
  role: { type: String, default: 'user', title: '' },   // user, member (at some point), officer (current)
  formerRole: [{ year: String, title: String }],        // former officer info
  emails: [String],                                     // Emails associated with account
  overrideMembership: [String],                         // 'F17' - declare membership no matter events attended
  events: [ObjectId],                                   // Events attended
  payments: [String],                                   // 'W18' - paid for these quarters
  name: String,
  bio: String,
  websiteUrl: String,
  linkedInUrl: String,
  gitHubUrl: String,
  photoUrl: String,
});

const eventSchema = new Schema({
  quarter: String,
  name: String,
  startTime: Date,
  endTime: Date,
  attendeeEmails: [String],
});
eventSchema.virtual('numAttendees').get(() => this.attendeeEmails.size());


const User = mongoose.model('User', userSchema);
const Event = mongoose.model('Event', eventSchema);

module.exports = {
  User,
  Event,
};
