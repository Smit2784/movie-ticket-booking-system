const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');
const { protect } = require('../middleware/auth');

// POST /api/bookings
router.post('/', protect, async (req, res, next) => {
  try {
    const payload = { ...req.body, user: req.user._id };
    const booking = await Booking.create(payload);
    res.status(201).json({ success:true, data: booking });
  } catch (err) { next(err); }
});

// GET /api/bookings/my-bookings
router.get('/my-bookings', protect, async (req, res, next) => {
  try {
    const bookings = await Booking.find({ user: req.user._id }).sort({ createdAt: -1 });
    res.json({ success:true, data: bookings });
  } catch (err) { next(err); }
});

module.exports = router;
