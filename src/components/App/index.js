import React from 'react';
// import PropTypes from 'prop-types';

// Styles
import './styles.css';

// Components
import UserStory from '../UserStory';
import Filter from '../Filter';

// Data
import initialState from '../../Redux/initialState';

const { userStories } = initialState;

const App = () => (
  <div className="main-wrap">
    <header>
      <h1>Planning poker</h1>
    </header>

    <Filter />

    <div className="user-stories-wrap">
      { userStories.map((userStory) => (
        <UserStory
          key={userStory.userStoryId}
          userStoryId={userStory.userStoryId}
          userStoryDescr={userStory.userStoryDescr}
          pollId={userStory.pollId}
          isVoted={userStory.isVoted}
        />
      )) }
    </div>
  </div>
);

export default App;
