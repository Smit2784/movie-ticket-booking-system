const mongoose = require('mongoose');

const giftCardSchema = new mongoose.Schema({
  cardNumber: {
    type: String,
    required: true,
    unique: true,
    uppercase: true
  },
  amount: {
    type: Number,
    required: [true, 'Gift card amount is required'],
    min: [100, 'Minimum gift card amount is ₹100'],
    max: [10000, 'Maximum gift card amount is ₹10,000']
  },
  balance: {
    type: Number,
    required: true
  },
  purchasedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  recipientEmail: {
    type: String,
    required: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email']
  },
  recipientName: {
    type: String,
    required: true,
    trim: true
  },
  message: {
    type: String,
    maxlength: [200, 'Message cannot exceed 200 characters']
  },
  expiryDate: {
    type: Date,
    required: true
  },
  status: {
    type: String,
    enum: ['active', 'expired', 'used', 'cancelled'],
    default: 'active'
  },
  usageHistory: [{
    bookingId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Booking'
    },
    amountUsed: {
      type: Number,
      required: true
    },
    usageDate: {
      type: Date,
      default: Date.now
    }
  }],
  isRedeemed: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

// Generate gift card number before saving
giftCardSchema.pre('save', function(next) {
  if (!this.cardNumber) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let cardNumber = 'GC';
    for (let i = 0; i < 12; i++) {
      cardNumber += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    this.cardNumber = cardNumber;
  }
  
  if (this.isNew) {
    this.balance = this.amount;
  }
  
  next();
});

module.exports = mongoose.model('GiftCard', giftCardSchema);