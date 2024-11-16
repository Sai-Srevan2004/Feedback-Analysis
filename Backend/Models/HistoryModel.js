const mongoose = require('mongoose');

const HistorySchema = new mongoose.Schema({
  summary: {
    type: String,
    required: true, 
  },
  url: {
    type: String,
    required: true,
  },
  positive: {
    type: Number,
    required: true,
  },
  negative: {
    type: Number,
    required: true,
  },
  neutral: {
    type: Number,
    required: true,
  },
  pros: {
    type: [String],
    required: true,
  },
  cons: {
    type: [String],
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 30 * 24 * 60 * 60 // Expire after 30 days
  }
});

// Create and export the model
module.exports = mongoose.model('History', HistorySchema);
