import { useContext } from 'react';
import { Context } from '../context/Context';
import { useNavigate, Link } from 'react-router-dom';

const TopBar = () => {
  const PF = 'http://localhost:5000/api/images/';

  const { user, dispatch } = useContext(Context);

  let navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fa-brands fa-facebook-square"></i>
        <i className="topIcon fa-brands fa-twitter-square"></i>
        <i className="topIcon fa-brands fa-pinterest-square"></i>
        <i className="topIcon fa-brands fa-instagram-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/about">
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/contact">
              CONTACT
            </Link>
          </li>
          {user ? (
            <li className="topListItem">
              <Link className="link" to="/write">
                WRITE
              </Link>
            </li>
          ) : (
            <li className="topListItem">
              <Link className="link" to="/article">
                ARTICLE
              </Link>
            </li>
          )}
          <li className="topListItem" onClick={handleLogout}>
            {user && 'LOGOUT'}
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link className="link" to="/settings">
            <img
              className="topImg"
              src={PF + user.profilePic}
              alt="author__avatar"
            />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
};

export default TopBar;
