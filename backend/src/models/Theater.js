const mongoose = require('mongoose');

const theaterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Theater name is required'],
    trim: true,
    maxlength: [100, 'Name cannot exceed 100 characters']
  },
  location: {
    address: {
      type: String,
      required: [true, 'Theater address is required']
    },
    city: {
      type: String,
      required: [true, 'City is required']
    },
    state: {
      type: String,
      required: [true, 'State is required']
    },
    pincode: {
      type: String,
      required: [true, 'Pincode is required'],
      match: [/^[0-9]{6}$/, 'Please enter a valid 6-digit pincode']
    },
    coordinates: {
      latitude: Number,
      longitude: Number
    }
  },
  screens: [{
    screenNumber: {
      type: Number,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    capacity: {
      type: Number,
      required: true,
      min: [50, 'Capacity must be at least 50'],
      max: [500, 'Capacity cannot exceed 500']
    },
    seatLayout: {
      rows: Number,
      seatsPerRow: Number,
      premiumRows: [Number],
      premiumSeats: [String]
    },
    screenType: {
      type: String,
      enum: ['2D', '3D', 'IMAX', '4DX'],
      default: '2D'
    }
  }],
  amenities: [{
    type: String,
    enum: ['Parking', 'Food Court', 'AC', 'Dolby Atmos', 'Recliner Seats', 'Wheelchair Access']
  }],
  contact: {
    phone: {
      type: String,
      required: true,
      match: [/^[0-9]{10}$/, 'Please enter a valid 10-digit phone number']
    },
    email: {
      type: String,
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email']
    }
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Theater', theaterSchema);