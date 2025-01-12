import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  tags: [{
    type: String,
    required: true,
  }],
  category: {
    type: String,
    required: true,
    enum: ['web', 'mobile', 'backend', 'other'],
  },
  links: [{
    label: String,
    href: String,
    variant: {
      type: String,
      default: 'default',
    },
  }],
  featured: {
    type: Boolean,
    default: false,
  },
}, {
  timestamps: true,
});

export default mongoose.models.Project || mongoose.model('Project', projectSchema); 