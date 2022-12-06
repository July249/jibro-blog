import React from 'react';
import { Link } from 'react-router-dom';

import editImg from '../../../assets/icon-modify-white.svg';
import logoutImg from '../../../assets/icon-logout.svg';

export default function Login() {
  return (
    <>
      <li className="profile-img">
        <Link to="/">
          <img
            src="https://raw.githubusercontent.com/July249/jibro-blog/main/src/assets/profile.jpg?raw=true"
            alt="My Page"
          />
        </Link>
      </li>
      <li>
        <Link to="/" className="button">
          <img src={editImg} alt="" />
          <span>Write</span>
        </Link>
      </li>
      <li>
        <button className="button white">
          <img src={logoutImg} alt="" />
          <span>Logout</span>
        </button>
      </li>
    </>
  );
}
