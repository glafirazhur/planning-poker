import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Styles
import './styles.css';

// Components
import UserStory from '../UserStory';
import Filter from '../Filter';

// Redux
import { loadUserStoriesAction } from '../../Redux/actions/userStoriesActions';


const App = ({ userStories, getUserStories }) => {
  useEffect(() => {
    getUserStories();
  }, []);

  return (
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
            userStoryName={userStory.userStoryName}
          />
        )) }
      </div>
    </div>
  );
};

App.propTypes = {
  userStories: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)),
  getUserStories: PropTypes.func.isRequired,
};

App.defaultProps = {
  userStories: [],
};

const mapStateToProps = (state) => ({ userStories: state.userStories });
const mapDispatchToProps = (dispatch) => ({
  getUserStories: () => dispatch(loadUserStoriesAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
