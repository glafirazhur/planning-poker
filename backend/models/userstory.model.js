import mongoose from 'mongoose';

const userStorySchema = new mongoose.Schema({
  userStoryName: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

const UserStory = mongoose.model('UserStory', userStorySchema);

export default UserStory;
