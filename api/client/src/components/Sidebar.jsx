import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { axiosInstance } from '../config';

const Sidebar = () => {
  const [cats, setCats] = useState([]);
  const PF = 'https://jibro-blog.herokuapp.com/images/';

  useEffect(() => {
    const getCats = async () => {
      const res = await axiosInstance.get('/categories');
      setCats(res.data);
    };
    getCats();
  }, []);

  return (
    <>
      <div className="sidebar">
        <div className="sidebarItem">
          <span className="sidebarTitle">ABOUT ME</span>
          <img
            className="sidebarAvatar"
            src={PF + 'jibro-about-image.jpeg'}
            alt=""
          />
          <p>
            I'm a passionated web front engineer with happy mind and keep
            steady! Also, I post what I had experienced for sharing!!
          </p>
        </div>
        <div className="sidebarItem">
          <span className="sidebarTitle">CATEGORIES</span>
          <ul className="sidebarList">
            {cats.map((c) => (
              <Link key={c._id} className="link" to={`/?cat=${c.name}`}>
                <li key={c._id} className="sidebarListItem">
                  {c.name}
                </li>
              </Link>
            ))}
          </ul>
        </div>
        <div className="sidebarItem">
          <span className="sidebarTitle">FOLLOW US</span>
          <div className="sidebarSocial">
            <a
              href="https://www.linkedin.com/in/jihyung-lee-871a09150/"
              className="sidebarIcon"
            >
              <i className="sidebarIcon fa-brands fa-linkedin"></i>
            </a>
            <a href="https://github.com/July249/" className="sidebarIcon">
              <i className="sidebarIcon fa-brands fa-github-square"></i>
            </a>
            <a href="https://www.instagram.com/" className="sidebarIcon">
              <i className="sidebarIcon fa-brands fa-instagram-square"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
