const express = require('express');
const router = express.Router();

router.get('/members', (req, res) => {
  res.json({ members: [{ name: 'tom1' }] });
});

module.exports = router;
