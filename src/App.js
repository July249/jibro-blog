import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { reset } from 'styled-reset';
import { createGlobalStyle } from 'styled-components';

import UserContext from './context/UserContext';

import Home from './pages/Home/Home';
import Blogdetail from './pages/Blogdetail/Blogdetail';
/* temperary style */
import './reset.css';
import './global.css';

function App() {
  // 실제로는 로그인이 되는 로직이 들어가야 합니다.
  const [userId, setUserId] = useState(1);
  const [isLogin, setIsLogin] = useState(true);

  return (
    <UserContext.Provider value={{ userId, isLogin }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog/:id" element={<Blogdetail />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}
export default App;
