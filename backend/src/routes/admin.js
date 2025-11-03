const express = require('express');
const router = express.Router();
const { protect, authorize } = require('../middleware/auth');
const User = require('../models/User');
const Booking = require('../models/Booking');
const Movie = require('../models/Movie');

// GET /api/admin/dashboard
router.get('/dashboard', protect, authorize('admin'), async (req, res, next) => {
  try {
    const [users, bookings, movies] = await Promise.all([
      User.countDocuments(),
      Booking.countDocuments(),
      Movie.countDocuments()
    ]);
    res.json({ success:true, data: { users, bookings, movies } });
  } catch (err) { next(err); }
});

// GET /api/admin/users
router.get('/users', protect, authorize('admin'), async (req, res, next) => {
  try {
    const users = await User.find().select('-password').limit(200);
    res.json({ success:true, data: users });
  } catch (err) { next(err); }
});

// GET /api/admin/bookings
router.get('/bookings', protect, authorize('admin'), async (req, res, next) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 }).limit(200);
    res.json({ success:true, data: bookings });
  } catch (err) { next(err); }
});

module.exports = router;
