import { Link } from 'react-router-dom';
import Category from '../category/Category';
import Author from '../author/Author';
/* temporary style */
import './posts.css';

export default function Posts({ posts }) {
  console.log(posts);

  return (
    <>
      {posts.map((post) => (
        <li key={post.id}>
          <Link to={`/blog/${post.id}`} className="post">
            <article>
              <img
                src={`https://raw.githubusercontent.com/July249/jibro-blog/main/public/postImg/post-img${post.id}.jpg?raw=true`}
                alt=""
              />
              <div className="contents-wrap">
                <Category category={post.category} />
                <h3>{post.title}</h3>
                <Author userName={post.userName} profileImg={post.profileImg} />
                <p className="post-description">{post.summary}</p>
              </div>
            </article>
          </Link>
        </li>
      ))}
    </>
  );
}
