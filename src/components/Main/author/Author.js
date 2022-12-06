import React from 'react';
/* temporary style */
import './author.css';

export default function Author({ userName, profileImg, created }) {
  return (
    <dl className="author-wrap">
      <dt className="a11y-hidden">Author</dt>
      <dd className="author">
        <img
          src="https://raw.githubusercontent.com/July249/jibro-blog/main/src/assets/profile.jpg?raw=true"
          alt=""
        />{' '}
        {userName}
      </dd>
      <dt className="a11y-hidden">Created</dt>
      <dd className="created">{created}</dd>
    </dl>
  );
}
