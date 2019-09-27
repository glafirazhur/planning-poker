import React from 'react';
import PropTypes from 'prop-types';

// Styles
import './styles.css';

// Components
import VoteDiagram from '../VoteDiagram';
import Poll from '../Poll';

const UserStory = ({
  userStoryId, userStoryDescr, pollId,
  isVoted,
}) => {
  function copyLinkAddress(e) {
    const currentLink = e.target;
    const textArea = document.createElement('textarea');
    const copiedElem = document.createElement('span');

    e.preventDefault();

    textArea.innerHTML = currentLink.href;
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);

    currentLink.appendChild(copiedElem);
    copiedElem.classList.add('copied-elem');
    copiedElem.innerHTML = 'Copied';

    setTimeout(() => {
      currentLink.removeChild(copiedElem);
    }, 2000);
  }

  const isVotedClass = isVoted ? '--voted' : '';

  return (
    <div className={`user-story ${isVotedClass}`}>
      <p className="user-story__description">{userStoryDescr}</p>

      {
        pollId
          ? <Poll pollId={pollId} />
          : <button type="button" className="user-story__create-poll-button">Create a poll</button>
      }

      {isVoted ? <VoteDiagram pollId={pollId} /> : null}

      <a href={`/${userStoryId}`} className="user-story__copy-link" onClick={(e) => copyLinkAddress(e)}>
        Copy User Story link to the clipboard
      </a>

    </div>
  );
};

UserStory.propTypes = {
  userStoryId: PropTypes.number.isRequired,
  userStoryDescr: PropTypes.string.isRequired,
  pollId: PropTypes.number,
  isVoted: PropTypes.bool,
};

UserStory.defaultProps = {
  pollId: null,
  isVoted: false,
};

export default UserStory;
