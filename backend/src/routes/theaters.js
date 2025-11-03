const express = require('express');
const router = express.Router();
const Theater = require('../models/Theater');
const Show = require('../models/Show');

// GET /api/theaters
router.get('/', async (req, res, next) => {
  try {
    const query = {};
    if (req.query.city) query['location.city'] = req.query.city;
    const theaters = await Theater.find(query).limit(50);
    res.json({ success:true, data: theaters });
  } catch (err) { next(err); }
});

// GET /api/theaters/:id/shows
router.get('/:id/shows', async (req, res, next) => {
  try {
    const { date, movieId } = req.query;
    const q = { theater: req.params.id };
    if (movieId) q.movie = movieId;
    if (date) {
      const d = new Date(date);
      const next = new Date(d); next.setDate(d.getDate()+1);
      q.showDate = { $gte: d, $lt: next };
    }
    const shows = await Show.find(q).limit(100);
    res.json({ success:true, data: shows });
  } catch (err) { next(err); }
});

module.exports = router;
