import React from 'react';
import PropTypes from 'prop-types';

// Styles
import './styles.css';

const VoteDiagram = ({ pollId }) => (
  <div className="vote-diagram">{`Voted diagram ${pollId}`}</div>
);

VoteDiagram.propTypes = {
  pollId: PropTypes.number.isRequired,
};

export default VoteDiagram;
