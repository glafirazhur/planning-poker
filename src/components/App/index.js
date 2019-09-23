import React from 'react';
import './styles.css';

const App = ({ polls }) => (
  <div className="App">
    <header>
      <h1>Planning poker</h1>

      <div className="poker-filter">
        Polls or User Stories
      </div>

      <div className="poker-board">
        <div className="user-story user-story--voted">
          <p className="user-story__description">As a user I can add a poll to the User Story</p>
          <a href={`/${pollId}`} className="user-story__copy-link">Copy a User Story Link</a>

          {/*  if voted */}
          <div className="vote-diagram">Some values</div>
          {/*  end if voted */}

          {/* if has a poll */}
          <div className="poll">
            <input type="radio" className="poll__vote" id="poll-vote-value" value="0" />
            <input type="radio" className="poll__vote" id="poll-vote-value" value="0.5" />
            <input type="radio" className="poll__vote" id="poll-vote-value" value="1" />
            <input type="radio" className="poll__vote" id="poll-vote-value" value="2" />
            <input type="radio" className="poll__vote" id="poll-vote-value" value="3" />
            <input type="radio" className="poll__vote" id="poll-vote-value" value="5" />
            <input type="radio" className="poll__vote" id="poll-vote-value" value="8" />
            <input type="radio" className="poll__vote" id="poll-vote-value" value="13" />
          </div>
          {/* end if has a poll */}
        </div>

        <div className="user-story-card">
          <p className="user-story__description">As a user I can add a poll to the User Story</p>
          <a href={`/${pollId}`} className="user-story__copy-link">Copy a User Story Link</a>
          <button type="button" className="user-story__create-poll-button">Create a poll</button>
          {/* if has a poll */}
          <div className="poll">
            <input type="radio" className="poll__vote" id="poll-vote-value" value="0" />
            <input type="radio" className="poll__vote" id="poll-vote-value" value="0.5" />
            <input type="radio" className="poll__vote" id="poll-vote-value" value="1" />
            <input type="radio" className="poll__vote" id="poll-vote-value" value="2" />
            <input type="radio" className="poll__vote" id="poll-vote-value" value="3" />
            <input type="radio" className="poll__vote" id="poll-vote-value" value="5" />
            <input type="radio" className="poll__vote" id="poll-vote-value" value="8" />
            <input type="radio" className="poll__vote" id="poll-vote-value" value="13" />
          </div>
          {/* end if has a poll */}
        </div>
        <div className="user-story-card">
          <p className="user-story__description">As a user I can add a poll to the User Story</p>
          <a href={`/${pollId}`} className="user-story__copy-link">Copy a User Story Link</a>
          {/* if has no poll */}
          <button type="button" className="user-story__create-poll-button">Create a poll</button>
          {/* end if has no poll */}
        </div>
        <div className="user-story-card">
          <p className="user-story__description">As a user I can add a poll to the User Story</p>
          <a href={`/${pollId}`} className="user-story__copy-link">Copy a User Story Link</a>
          {/* if has no poll */}
          <button type="button" className="user-story__create-poll-button">Create a poll</button>
          {/* end if has no poll */}
        </div>
      </div>
    </header>
  </div>
);

export default App;
