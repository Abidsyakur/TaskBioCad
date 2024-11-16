const express = require('express');
const router = express.Router();

// Example API route
router.get('/api/data', (req, res) => {
  res.json({ message: 'Hello from server!' });
});

module.exports = router;
