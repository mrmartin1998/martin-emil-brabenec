import mongoose from 'mongoose';

const skillSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
    trim: true,
  },
  items: [{
    type: String,
    required: true,
  }],
  order: {
    type: Number,
    default: 0,
  },
}, {
  timestamps: true,
});

export default mongoose.models.Skill || mongoose.model('Skill', skillSchema); 