const mongoose = require('mongoose');

const showSchema = new mongoose.Schema({
  movie: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Movie',
    required: [true, 'Movie is required']
  },
  theater: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Theater',
    required: [true, 'Theater is required']
  },
  screen: {
    screenNumber: {
      type: Number,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  },
  showDate: {
    type: Date,
    required: [true, 'Show date is required']
  },
  showTime: {
    type: String,
    required: [true, 'Show time is required'],
    match: [/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/, 'Please enter time in HH:MM format']
  },
  pricing: {
    regular: {
      type: Number,
      required: true,
      min: [50, 'Price must be at least ₹50']
    },
    premium: {
      type: Number,
      required: true,
      min: [100, 'Premium price must be at least ₹100']
    }
  },
  availableSeats: [{
    seatNumber: {
      type: String,
      required: true
    },
    seatType: {
      type: String,
      enum: ['regular', 'premium'],
      default: 'regular'
    },
    isAvailable: {
      type: Boolean,
      default: true
    }
  }],
  bookedSeats: [{
    seatNumber: String,
    bookingId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Booking'
    }
  }],
  totalSeats: {
    type: Number,
    required: true
  },
  language: {
    type: String,
    required: true
  },
  subtitles: [{
    type: String
  }],
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

// Index for efficient querying
showSchema.index({ movie: 1, theater: 1, showDate: 1, showTime: 1 });
showSchema.index({ showDate: 1, isActive: 1 });

module.exports = mongoose.model('Show', showSchema);