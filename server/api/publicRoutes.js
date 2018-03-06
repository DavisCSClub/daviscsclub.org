const express = require('express');
const router = express.Router();

router.get('/members', (req, res) => {
  res.json({ members: [{ userId: '', name: 'First Last', bio: 'fewfjwieflwef fewfuwekhf', photoUrl: 'http://via.placeholder.com/250x250', linkedInUrl: 'fe', gitHubUrl: 'fefe', websiteUrl: '' }] });
});

module.exports = router;
