import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// Redux
import { connect } from 'react-redux';
import { updateVoteAction, addVoteAction } from '../../Redux/actions/votesActoins';

// Styles
import './styles.css';

// Data
import pollValues from '../../appSettings';

const Poll = ({
  pollId, voteId, currentUser, votes, updateVote, addVote,
}) => {
  const currentVote = votes.filter((voteItem) => voteItem.voteId === voteId);
  const initVoteValue = currentVote[0] ? currentVote[0].voteValue : null;
  const [selectedOption, setSelectedOption] = useState(initVoteValue);
  const [currentVoteId, setCurrentVoteId] = useState(voteId);

  const submitPoll = (e) => {
    e.preventDefault();
    const voteValue = parseFloat(selectedOption, 10);
    if (currentVoteId) {
      updateVote(currentVoteId, voteValue);
    } else {
      let newVoteId = Math.max(...votes.map((vote) => vote.voteId), 0);
      newVoteId += 1;
      addVote(newVoteId, currentUser, pollId, voteValue);
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
  voteId: PropTypes.number,
  votes: PropTypes.arrayOf(PropTypes.any).isRequired,
  currentUser: PropTypes.number.isRequired,
  updateVote: PropTypes.func.isRequired,
  addVote: PropTypes.func.isRequired,
};

Poll.defaultProps = {
  voteId: null,
};

const mapDispatchToProps = (dispatch) => ({
  updateVote: (voteId, voteValue) => dispatch(updateVoteAction(voteId, voteValue)),
  addVote:
    (voteId, currentUser, pollId, voteValue) => (
      dispatch(addVoteAction(voteId, currentUser, pollId, voteValue))
    ),
});

const mapStateToProps = (state) => ({
  currentUser: state.currentUser,
  votes: state.votes,
});
export default connect(mapStateToProps, mapDispatchToProps)(Poll);
