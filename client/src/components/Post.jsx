import { Link } from 'react-router-dom';

const Post = ({ img }) => {
  return (
    <div className="post">
      <img className="postImg" src={img} alt="" />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">
          <Link className="link" to="/post/:postId">
            Lorem ipsum dolor sit amet
          </Link>
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis veniam
        sequi illo facilis, a nihil repudiandae iusto. Eos labore earum ea
        maxime rerum voluptas. Corrupti unde fuga placeat iure hic! Lorem, ipsum
        dolor sit amet consectetur adipisicing elit. Omnis veniam sequi illo
        facilis, a nihil repudiandae iusto. Eos labore earum ea maxime rerum
        voluptas. Corrupti unde fuga placeat iure hic! Lorem, ipsum dolor sit
        amet consectetur adipisicing elit. Omnis veniam sequi illo facilis, a
        nihil repudiandae iusto. Eos labore earum ea maxime rerum voluptas.
        Corrupti unde fuga placeat iure hic!
      </p>
    </div>
  );
};

export default Post;
