import mongoose from 'mongoose';

const pollSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    require: true,
    unique: true,
    ref: 'User',
  },
  userStory: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    unique: true,
    ref: 'UserStory',
  },
});

const Poll = mongoose.model('Poll', pollSchema);

export default Poll;
