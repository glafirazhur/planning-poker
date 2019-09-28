const initialState = {
  userStories: [
    {
      userStoryId: 1,
      userStoryName: 'As a user I want to add polls to the User story',
      user: 1,
    },
    {
      userStoryId: 2,
      userStoryName: 'As a user I want to add polls to the User story',
    },
    {
      userStoryId: 3,
      userStoryName: 'As a user I want to add polls to the User story',
      user: 1,
    },
    {
      userStoryId: 4,
      userStoryName: 'As a user I want to add polls to the User story',
      user: 1,
    },
    {
      userStoryId: 5,
      userStoryName: 'As a user I want to add polls to the User story',
      user: 1,
    },
    {
      userStoryId: 6,
      userStoryName: 'As a user I want to add polls to the User story',
      user: 1,
    },
  ],
  polls: [
    {
      pollId: 1,
      user: 1,
      userStory: 1,
    },
    {
      pollId: 2,
      user: 1,
      userStory: 5,
    },
    {
      pollId: 3,
      user: 1,
      userStory: 2,
    },
    {
      pollId: 4,
      user: 1,
      userStory: 3,
    },
  ],
  votes: [
    {
      voteId: 1,
      user: 1,
      poll: 1,
      voteValue: 1,
    },
    {
      voteId: 2,
      user: 1,
      poll: 2,
      voteValue: 1,
    },
    {
      voteId: 3,
      user: 1,
      poll: 3,
      voteValue: 1,
    },
  ],
};

export default initialState;
