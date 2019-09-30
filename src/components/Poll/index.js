import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// Redux
import { connect } from 'react-redux';
import { updateVoteThunk, addVoteThunk } from '../../Redux/actions/votesActoins';

// Styles
import './styles.css';

// Data
import pollValues from '../../appSettings';

const Poll = ({
  pollId, voteId, currentUser, votes, updateVote, addVote,
}) => {
  // eslint-disable-next-line no-underscore-dangle
  const currentVote = votes.filter((voteItem) => voteItem._id === voteId);
  const initVoteValue = currentVote[0] ? currentVote[0].voteValue : null;
  const [selectedOption, setSelectedOption] = useState(initVoteValue);
  const [currentVoteId, setCurrentVoteId] = useState(voteId);

  const submitPoll = (e) => {
    e.preventDefault();
    const voteValue = parseFloat(selectedOption, 10);
    if (currentVoteId) {
      updateVote(currentVoteId, voteValue);
    } else {
      // eslint-disable-next-line no-underscore-dangle
      let newVoteId = Math.max(...votes.map((vote) => vote._id), 0);
      newVoteId += 1;
      addVote(currentUser, pollId, voteValue);
      setCurrentVoteId(newVoteId);
    }
  };

  useEffect(() => {
    setCurrentVoteId(voteId);
    setSelectedOption(initVoteValue);
  }, [votes]);

  return (
    <form onSubmit={(e) => submitPoll(e)} className="poll" id={`vote-form-${pollId}`}>
      {pollValues.map((pollValue) => (
        <div key={`${pollId}-${pollValue}`} className="poll__vote-container">
          <input
            type="radio"
            className={`poll__vote-value ${pollValue === selectedOption ? '--selected' : ''}`}
            id={`poll${pollId}-value${pollValue}`}
            value={pollValue}
            name={`poll-${pollId}`}
            checked={pollValue === selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
          />

          <label htmlFor={`poll${pollId}-value${pollValue}`} className="poll__vote-label">{pollValue}</label>
        </div>
      ))}
      <button type="submit" className="poll__submit-vote">Save vote</button>
    </form>
  );
};

Poll.propTypes = {
  pollId: PropTypes.number.isRequired,
  // currentOption: PropTypes.number,
  voteId: PropTypes.string,
  votes: PropTypes.arrayOf(PropTypes.any).isRequired,
  currentUser: PropTypes.number.isRequired,
  updateVote: PropTypes.func.isRequired,
  addVote: PropTypes.func.isRequired,
};

Poll.defaultProps = {
  voteId: null,
};

const mapDispatchToProps = (dispatch) => ({
  updateVote: (voteId, voteValue) => dispatch(updateVoteThunk(voteId, voteValue)),
  addVote:
    (currentUser, pollId, voteValue) => {
      dispatch(addVoteThunk(currentUser, pollId, voteValue));
    },
});

const mapStateToProps = (state) => ({
  currentUser: state.currentUser,
  votes: state.votes,
});

export default connect(mapStateToProps, mapDispatchToProps)(Poll);
