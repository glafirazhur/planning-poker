const initialState = {
  pollValues: [0, 0.5, 1, 2, 3, 5, 8, 13],
  userStories: [
    {
      userStoryId: 1,
      userStoryDescr: 'As a user I want to add polls to the User story',
      pollId: 1,
      isVoted: false,
    },
    {
      userStoryId: 2,
      userStoryDescr: 'As a user I want to add polls to the User story',
      pollId: 2,
      isVoted: false,
    },
    {
      userStoryId: 3,
      userStoryDescr: 'As a user I want to add polls to the User story',
      pollId: null,
      isVoted: false,
    },
    {
      userStoryId: 4,
      userStoryDescr: 'As a user I want to add polls to the User story',
      pollId: 5,
      isVoted: false,
    },
    {
      userStoryId: 5,
      userStoryDescr: 'As a user I want to add polls to the User story',
      pollId: null,
      isVoted: false,
    },
    {
      userStoryId: 6,
      userStoryDescr: 'As a user I want to add polls to the User story',
      pollId: null,
      isVoted: false,
    },
  ],
};

export default initialState;
