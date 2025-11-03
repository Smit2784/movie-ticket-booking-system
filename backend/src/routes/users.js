const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/auth');
const User = require('../models/User');

// GET /api/users/me
router.get('/me', protect, async (req, res, next) => {
  try {
    res.json({ success:true, data: req.user });
  } catch (err) { next(err); }
});

module.exports = router;
