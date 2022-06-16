import React from 'react';
import Header from '../../components/Header';
import Posts from '../../components/Posts';
import Sidebar from '../../components/Sidebar';
import './homepage.css';

const Homepage = () => {
  return (
    <>
      <Header />
      <div className="home">
        <Posts />
        <Sidebar />
      </div>
    </>
  );
};

export default Homepage;
