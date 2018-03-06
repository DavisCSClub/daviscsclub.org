const express = require('express');
const Auth0UserManagement = require('./Auth0UserManagement');
const models = require('./models');
const User = models.User;
const router = express.Router();

const auth0UserManagement = new Auth0UserManagement();

// Add promise for current user's Document to req.userDoc
async function checkGetUserDoc(req, res, next) {
  const userId = req.user.sub;
  req.userDoc = await User.findOne({ userId }).exec();
  // Create a document if none exists
  if (!req.userDoc) {
    const auth0UserData = await auth0UserManagement.getUser(userId);
    req.userDoc = await User.create({
      userId,
      emails: [auth0UserData.email],
      name: auth0UserData.name,
    });
  }
  next();
}

router.use(checkGetUserDoc);

router.get('/userData', (req, res) => {
  // console.log(req.user);
  // console.log(req.userDoc);
  res.json({ success: true });
});

module.exports = router;
