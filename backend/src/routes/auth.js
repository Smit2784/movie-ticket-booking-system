const express = require('express');
const router = express.Router();
const Joi = require('joi');
const User = require('../models/User');
const { generateToken } = require('../utils/jwt');

// Validation schemas
const registerSchema = Joi.object({
  name: Joi.string().min(2).max(50).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  phone: Joi.string().pattern(/^[0-9]{10}$/).required(),
});

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

// POST /api/auth/register
router.post('/register', async (req, res, next) => {
  try {
    const { error, value } = registerSchema.validate(req.body);
    if (error) return res.status(400).json({ success:false, message: error.details[0].message });

    const existing = await User.findOne({ email: value.email });
    if (existing) return res.status(400).json({ success:false, message: 'Email already registered' });

    const user = await User.create(value);
    const token = generateToken({ id: user._id, role: user.role });
    res.status(201).json({ success:true, token, user: { id: user._id, name: user.name, email: user.email, role: user.role } });
  } catch (err) { next(err); }
});

// POST /api/auth/login
router.post('/login', async (req, res, next) => {
  try {
    const { error, value } = loginSchema.validate(req.body);
    if (error) return res.status(400).json({ success:false, message: error.details[0].message });

    const user = await User.findOne({ email: value.email }).select('+password');
    if (!user) return res.status(400).json({ success:false, message: 'Invalid credentials' });

    const ok = await user.matchPassword(value.password);
    if (!ok) return res.status(400).json({ success:false, message: 'Invalid credentials' });

    const token = generateToken({ id: user._id, role: user.role });
    res.json({ success:true, token, user: { id: user._id, name: user.name, email: user.email, role: user.role } });
  } catch (err) { next(err); }
});

module.exports = router;
