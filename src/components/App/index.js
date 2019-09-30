import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Styles
import '../../index.css';
import './styles.css';

// Components
import UserStory from '../UserStory';

// Redux
import { loadUserStoriesAction } from '../../Redux/actions/userStoriesActions';
import { loadPollsAction } from '../../Redux/actions/pollActions';
import { loadVotesAction } from '../../Redux/actions/votesActoins';

const App = ({
  userStories, polls, votes, currentUser, getUserStories, getPolls, getVotes,
}) => {
  useEffect(() => {
    getUserStories();
    getPolls();
    getVotes();
  }, []);

  return (
    <main className="main-content">
      <header className="main-header">
        <h1>Planning poker</h1>
        <span className="header__current-user">{`Current user: ${currentUser}`}</span>
      </header>

      <div className="user-stories-wrap">
        { userStories.map((userStory) => {
          const poll = polls.filter((pollItem) => pollItem.userStory === userStory.userStoryId)[0];
          return (
            <UserStory
              key={userStory.userStoryId}
              userStoryId={userStory.userStoryId}
              userStoryName={userStory.userStoryName}
              poll={poll}
              currentUser={currentUser}
              votes={votes}
            />
          );
        }) }
      </div>
    </main>
  );
};

App.propTypes = {
  userStories: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)),
  polls: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)),
  votes: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)),
  currentUser: PropTypes.number.isRequired,
  getUserStories: PropTypes.func.isRequired,
  getPolls: PropTypes.func.isRequired,
  getVotes: PropTypes.func.isRequired,
};

App.defaultProps = {
  userStories: [],
  polls: [],
  votes: [],
};

const mapStateToProps = (state) => ({
  userStories: state.userStories,
  polls: state.polls,
  votes: state.votes,
  currentUser: state.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  getUserStories: () => dispatch(loadUserStoriesAction()),
  getPolls: () => dispatch(loadPollsAction()),
  getVotes: () => dispatch(loadVotesAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
