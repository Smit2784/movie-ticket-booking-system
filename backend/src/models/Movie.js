const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Movie title is required'],
    trim: true,
    maxlength: [100, 'Title cannot exceed 100 characters']
  },
  description: {
    type: String,
    required: [true, 'Movie description is required'],
    maxlength: [1000, 'Description cannot exceed 1000 characters']
  },
  genre: [{
    type: String,
    required: true
  }],
  duration: {
    type: Number,
    required: [true, 'Movie duration is required'],
    min: [60, 'Duration must be at least 60 minutes'],
    max: [300, 'Duration cannot exceed 300 minutes']
  },
  rating: {
    type: String,
    required: [true, 'Movie rating is required'],
    enum: ['G', 'PG', 'PG-13', 'R', 'NC-17']
  },
  releaseDate: {
    type: Date,
    required: [true, 'Release date is required']
  },
  language: {
    type: String,
    required: [true, 'Movie language is required']
  },
  director: {
    type: String,
    required: [true, 'Director name is required']
  },
  cast: [{
    type: String,
    required: true
  }],
  poster: {
    type: String,
    default: null
  },
  trailer: {
    type: String,
    default: null
  },
  isActive: {
    type: Boolean,
    default: true
  },
  theaters: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Theater'
  }],
  averageRating: {
    type: Number,
    default: 0,
    min: 0,
    max: 5
  },
  totalReviews: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
});

// Index for search functionality
movieSchema.index({ title: 'text', description: 'text', genre: 'text' });

module.exports = mongoose.model('Movie', movieSchema);