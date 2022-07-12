import { useEffect, useState } from 'react';
import { axiosInstance } from '../../config';
import Header from '../../components/Header';
import Posts from '../../components/Posts';
import Sidebar from '../../components/Sidebar';
import Contact from '../../components/Contact';
import './homepage.css';
import { useLocation } from 'react-router-dom';

const Homepage = () => {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axiosInstance.get('/posts' + search);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);

  console.log(posts);

  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts} />
        <Sidebar />
      </div>
      <Contact />
    </>
  );
};

export default Homepage;
