import React from 'react';
import PropTypes from 'prop-types';
import { copyLinkAddress } from '../../helpers';

// Styles
import './styles.css';

// Components
import VoteDiagram from '../VoteDiagram';
import Poll from '../Poll';

const UserStory = ({
  userStoryId, userStoryName, poll, votes,
}) => {
  // const isVotedClass = vote ? '--voted' : '';
  const isVotedClass = '--voted';
  /*
  useEffect(() => {
    loadPoll(userStoryId);
  }, []);
  */

  return (
    <div className={`user-story ${isVotedClass}`}>
      <p className="user-story__description">{userStoryName}</p>

      {
        poll
          ? <button type="button" className="user-story__create-poll-button">Create a poll</button>
          : <Poll pollId={poll.pollId} />
      }

      {
        votes.length
          ? <VoteDiagram pollId={poll.pollId} />
          : null
      }

      <a href={`/${userStoryId}`} className="user-story__copy-link" onClick={(e) => copyLinkAddress(e)}>
        Copy User Story link to the clipboard
      </a>

    </div>
  );
};

UserStory.propTypes = {
  userStoryName: PropTypes.string.isRequired,
  userStoryId: PropTypes.number.isRequired,
  votes: PropTypes.arrayOf(PropTypes.any),
  // poll: PropTypes.objectOf(PropTypes.any),
  poll: PropTypes.objectOf(PropTypes.any),
  // loadPoll: PropTypes.func.isRequired,
};

UserStory.defaultProps = {
  votes: [],
  poll: {},
};

export default UserStory;
