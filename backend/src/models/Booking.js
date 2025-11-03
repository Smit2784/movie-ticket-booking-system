const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'User is required']
  },
  show: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Show',
    required: [true, 'Show is required']
  },
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
  bookingId: {
    type: String,
    required: true,
    unique: true
  },
  seats: [{
    seatNumber: {
      type: String,
      required: true
    },
    seatType: {
      type: String,
      enum: ['regular', 'premium'],
      required: true
    },
    price: {
      type: Number,
      required: true
    }
  }],
  totalAmount: {
    type: Number,
    required: [true, 'Total amount is required'],
    min: [0, 'Total amount cannot be negative']
  },
  bookingStatus: {
    type: String,
    enum: ['pending', 'confirmed', 'cancelled', 'completed'],
    default: 'pending'
  },
  paymentStatus: {
    type: String,
    enum: ['pending', 'success', 'failed', 'refunded'],
    default: 'pending'
  },
  paymentMethod: {
    type: String,
    enum: ['credit_card', 'debit_card', 'upi', 'net_banking', 'wallet'],
    required: true
  },
  transactionId: {
    type: String,
    default: null
  },
  showDate: {
    type: Date,
    required: true
  },
  showTime: {
    type: String,
    required: true
  },
  bookingDate: {
    type: Date,
    default: Date.now
  },
  cancellationReason: {
    type: String,
    default: null
  },
  refundAmount: {
    type: Number,
    default: 0
  },
  additionalServices: {
    food: [{
      item: String,
      quantity: Number,
      price: Number
    }],
    parking: {
      required: {
        type: Boolean,
        default: false
      },
      price: {
        type: Number,
        default: 0
      }
    }
  }
}, {
  timestamps: true
});

// Generate booking ID before saving
bookingSchema.pre('save', function(next) {
  if (!this.bookingId) {
    const timestamp = Date.now();
    const random = Math.floor(Math.random() * 1000);
    this.bookingId = `BK${timestamp}${random}`;
  }
  next();
});

// Index for efficient querying
bookingSchema.index({ user: 1, bookingStatus: 1 });
bookingSchema.index({ bookingId: 1 }, { unique: true });
bookingSchema.index({ showDate: 1, bookingStatus: 1 });

module.exports = mongoose.model('Booking', bookingSchema);