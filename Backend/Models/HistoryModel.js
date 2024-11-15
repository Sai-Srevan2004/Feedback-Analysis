const mongoose = require('mongoose');

const HistorySchema = new mongoose.Schema({
  summary: {
    type: String,
    required: true, 
  },
  email: {
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
  pros:{
    type:[String],
    required:true
  },
  cons:{
    type:[String],
    required:true
  }
}, {
  timestamps: true,  // Automatically adds `createdAt` and `updatedAt` fields
});

// Create and export the model
module.exports = mongoose.model('History', HistorySchema);


