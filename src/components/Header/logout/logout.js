import { Link } from 'react-router-dom';

import loginImg from '../../../assets/icon-login.svg';
import registerImg from '../../../assets/icon-register.svg';

export default function Logout() {
  return (
    <>
      <li>
        <Link to="/" className="button gray">
          <img src={loginImg} alt="" />
          <span>Login</span>
        </Link>
      </li>
      <li className="only-pc">
        <Link to="/" className="button gray">
          <img src={registerImg} alt="" />
          <span>Register</span>
        </Link>
      </li>
    </>
  );
}
