import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import UserContext from '../../context/UserContext';
import Posts from './posts/Posts';
import About from './about/About';
/* temporary style */
import './main.css';

export default function Main() {
  const { isLogin } = useContext(UserContext);
  const [posts, setPosts] = useState();

  useEffect(() => {
    axios
      .get(
        'https://raw.githubusercontent.com/July249/jibro-blog/main/public/contents/posts.json'
      )
      .then((json) => {
        // console.log(json)
        // console.log(json.data)
        setPosts(json.data);
      });
  }, []);

  return (
    <main>
      {posts === undefined ? (
        <></>
      ) : (
        <div className="max-width">
          <h2 className="a11y-hidden">Post</h2>
          <ul className="posts">
            {/* components array로 생성 */}
            <Posts posts={posts} />
          </ul>
          {isLogin ? <About /> : <></>}
        </div>
      )}
    </main>
  );
}
