import React from 'react';

import { rhythm } from '../utils/typography';

class Footer extends React.Component {
  render() {
    return (
      <footer
        style={{
          marginTop: rhythm(2.5),
          paddingTop: rhythm(1),
        }}
      >
        <a
          href="https://github.com/karlwesten"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>{' '}
        &bull;{' '}
        <a href="#" target="_blank" rel="noopener noreferrer">
          Twitter
        </a>{' '}
        &bull;{' '}
        <a href="#" target="_blank" rel="noopener noreferrer">
          知乎
        </a>{' '}
        &bull;{' '}
        <a href="#" target="_blank" rel="noopener noreferrer">
          微博
        </a>
      </footer>
    );
  }
}

export default Footer;
