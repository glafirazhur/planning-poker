import React from 'react';
import PropTypes from 'prop-types';

// Redux
import { connect } from 'react-redux';

// Helpers
import { copyLinkAddress } from '../../helpers';

// Styles
import './styles.css';

// Components
import VoteDiagram from '../VoteDiagram';
import Poll from '../Poll';

const UserStory = ({
  userStoryId, userStoryName, poll, votes, currentUser,
}) => {
  const pollVotes = votes.filter((vote) => vote.poll === poll.pollId);
  const userVote = pollVotes.filter((vote) => vote.user === currentUser);
  const isVoted = !!userVote.length;
  const isVotedClass = isVoted ? '--voted' : '';

  return (
    <div className={`user-story ${isVotedClass}`}>
      <p className="user-story__description">{userStoryName}</p>
      {
        poll.pollId
          ? <VoteDiagram pollId={poll.pollId} />
          : null
      }
      {
        poll.pollId
          ? <Poll pollId={poll.pollId} voteId={userVote[0] ? userVote[0].voteId : null} />
          : <button type="button" className="user-story__create-poll-button">Create a poll</button>
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
  poll: PropTypes.objectOf(PropTypes.any),
  votes: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)),
  currentUser: PropTypes.number.isRequired,
};

UserStory.defaultProps = {
  votes: [],
  poll: {},
};

const mapStateToProps = (state) => ({ votes: state.votes });

export default connect(mapStateToProps)(UserStory);
