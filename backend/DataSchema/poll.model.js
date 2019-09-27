const mongoose = require('mongoose');

const { Schema } = mongoose;

const pollSchema = Schema({
  user: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  userStory: {
    type: Schema.Types.ObjectId,
    required: true,
  },
});

const Poll = mongoose.model('Poll', pollSchema);

export default Poll;
