import { useContext } from 'react';
import { Context } from '../context/Context';
import { useNavigate, Link } from 'react-router-dom';

const TopBar = () => {
  const PF = 'https://jibro-blog.herokuapp.com/images/';

  const { user, dispatch } = useContext(Context);

  let navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <div className="top">
      <div className="topLeft">
        <a
          href="https://www.linkedin.com/in/jihyung-lee-871a09150/"
          title="linkedin"
          target="blank"
          className="topIcon"
        >
          <i className="topIcon fa-brands fa-linkedin"></i>
        </a>
        <a
          href="https://github.com/July249/"
          title="github"
          target="blank"
          className="topIcon"
        >
          <i className="topIcon fa-brands fa-github-square"></i>
        </a>
        <a
          href="https://www.instagram.com/"
          title="instagram"
          target="blank"
          className="topIcon"
        >
          <i className="topIcon fa-brands fa-instagram-square"></i>
        </a>
        <a
          href="mailto:easyshiny724@gmail.com"
          title="send mail"
          className="topIcon"
        >
          <i className="topIcon fa-solid fa-envelope"></i>
        </a>
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
          {/* <li className="topListItem">
            <Link className="link" to="/article">
              ARTICLE
            </Link>
          </li> */}
          <li className="topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
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
