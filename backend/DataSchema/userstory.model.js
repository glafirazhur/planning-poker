const mongoose = require('mongoose');

const { Schema } = mongoose;

const userStorySchema = Schema({
  usName:  {
    type: String,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    required: true,
  },
});

const UserStory = mongoose.model('UserStory', userStorySchema);

export default UserStory;
