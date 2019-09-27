import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Styles
import './styles.css';

// Data
import initialState from '../../Redux/initialState';

const { pollValues } = initialState;

const Poll = ({ pollId, selectedValue }) => {
  const [currentValue, setCurrentValue] = useState(selectedValue);

  return (
    <div className="poll">
      {pollValues.map((pollValue) => (
        <input
          key={`${pollId}-${pollValue}`}
          type="radio"
          className="poll__vote-value"
          id={`poll${pollId}-value${pollValue}`}
          value={pollValue}
          name={`poll-${pollId}`}
          checked={pollValue === currentValue}
          onChange={(e) => setCurrentValue(e.target.value)}
        />
      ))}
    </div>
  );
};

Poll.propTypes = {
  pollId: PropTypes.number.isRequired,
  selectedValue: PropTypes.number,
};

Poll.defaultProps = {
  selectedValue: 2,
};

export default Poll;
