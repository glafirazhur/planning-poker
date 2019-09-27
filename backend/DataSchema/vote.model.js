const mongoose = require('mongoose');

const { Schema } = mongoose;

const voteSchema = Schema({
  user: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  poll: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  voteValue: {
    type: Number,
    required: true,
  },
});

const Vote = mongoose.model('Vote', voteSchema);

export default Vote;
