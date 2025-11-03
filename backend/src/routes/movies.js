const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie');

// GET /api/movies
router.get('/', async (req, res, next) => {
  try {
    const movies = await Movie.find({ isActive: true }).sort({ createdAt: -1 }).limit(20);
    res.json({ success:true, data: movies });
  } catch (err) { next(err); }
});

// GET /api/movies/:id
router.get('/:id', async (req, res, next) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (!movie) return res.status(404).json({ success:false, message: 'Movie not found' });
    res.json({ success:true, data: movie });
  } catch (err) { next(err); }
});

module.exports = router;
