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
      voteValue: 5,
    },
    {
      voteId: 4,
      user: 2,
      poll: 1,
      voteValue: 5,
    },
    {
      voteId: 7,
      user: 3,
      poll: 1,
      voteValue: 8,
    },
    {
      voteId: 9,
      user: 5,
      poll: 1,
      voteValue: 8,
    },
    {
      voteId: 10,
      user: 6,
      poll: 1,
      voteValue: 5,
    },
    {
      voteId: 8,
      user: 4,
      poll: 1,
      voteValue: 13,
    },
    {
      voteId: 2,
      user: 1,
      poll: 2,
      voteValue: 0.5,
    },
    {
      voteId: 5,
      user: 3,
      poll: 2,
      voteValue: 13,
    },
    {
      voteId: 6,
      user: 2,
      poll: 2,
      voteValue: 5,
    },
    {
      voteId: 3,
      user: 1,
      poll: 3,
      voteValue: 2,
    },
  ],
  currentUser: 1,
};

export default initialState;
