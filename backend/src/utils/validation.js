const Joi = require('joi');

// User validation schemas
const userRegisterSchema = Joi.object({
  name: Joi.string().min(2).max(50).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  phone: Joi.string().pattern(/^[0-9]{10}$/).required(),
});

const userLoginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

// Movie validation schemas
const movieSchema = Joi.object({
  title: Joi.string().min(1).max(100).required(),
  description: Joi.string().min(10).max(1000).required(),
  genre: Joi.array().items(Joi.string()).min(1).required(),
  duration: Joi.number().min(60).max(300).required(),
  rating: Joi.string().valid('G', 'PG', 'PG-13', 'R', 'NC-17').required(),
  releaseDate: Joi.date().required(),
  language: Joi.string().required(),
  director: Joi.string().required(),
  cast: Joi.array().items(Joi.string()).required(),
});

// Booking validation schemas
const bookingSchema = Joi.object({
  movieId: Joi.string().required(),
  theaterId: Joi.string().required(),
  showId: Joi.string().required(),
  seats: Joi.array().items(Joi.string()).min(1).required(),
  totalAmount: Joi.number().min(0).required(),
});

module.exports = {
  userRegisterSchema,
  userLoginSchema,
  movieSchema,
  bookingSchema,
};