const mongoose = require('mongoose');

const pollSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    require: true,
    ref: 'User',
  },
  userStory: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'UserStory',
  },
});

const Poll = mongoose.model('Poll', pollSchema);

export default Poll;
