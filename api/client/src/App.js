import TopBar from './components/TopBar';
import Homepage from './pages/homepage/Homepage';
import Single from './pages/single/Single';
import Write from './pages/write/Write';
// import Article from './pages/article/Article';
import About from './pages/about/About';
import Settings from './pages/settings/Settings';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from './context/Context';

function App() {
  const { user } = useContext(Context);
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/register" element={user ? <Homepage /> : <Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={user ? <Homepage /> : <Login />} />
        <Route path="/write" element={user ? <Write /> : <Login />} />
        <Route path="/settings" element={user ? <Settings /> : <Login />} />
        <Route path="/post/:postId" element={<Single />} />
        {/* <Route path="/posts" element={<Article />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
