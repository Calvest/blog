import React from 'react';
import { rhythm } from '../utils/typography';
import profilePic from '../assets/profile-pic.jpeg';

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2),
        }}
      >
        <img
          src={profilePic}
          alt={`Wei Bo`}
          style={{
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
            borderRadius: '50%',
            marginRight: rhythm(1 / 2),
          }}
        />
        <div>
          <p style={{ marginBottom: 0 }}>
            {' '}
            Hey Guys! My name is{' '}
            <a href="https://github.com/karlwesten"> Wei Bo </a>.
          </p>
          <p style={{ marginBottom: 0 }}>
            I am a software development engineer.
          </p>
        </div>
      </div>
    );
  }
}

export default Bio;
