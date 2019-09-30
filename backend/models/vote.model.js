import mongoose from 'mongoose';

const voteSchema = new mongoose.Schema({
  user: {
    // type: mongoose.Schema.Types.ObjectId,
    type: mongoose.Schema.Types.Number,
    ref: 'User',
    required: true,
  },
  poll: {
    // type: mongoose.Schema.Types.ObjectId,
    type: mongoose.Schema.Types.Number,
    ref: 'Poll',
    required: true,
  },
  voteValue: {
    type: Number,
    required: true,
  },
});

const Vote = mongoose.model('Vote', voteSchema);

export default Vote;
