import React from 'react';
import { useLocation } from 'react-router-dom';
import { Today } from './contents/Today';
import { Mainbanner } from './contents/Mainbanner';
/* temporary style */
import './banner.css';

export default function Banner() {
  const location = useLocation();
  // console.log(location);
  // console.log(location.pathname);

  return (
    <>
      <div className="banner">
        <div className="max-width">
          {location.pathname.includes('/blog/') ? <Today /> : <Mainbanner />}
        </div>
      </div>
    </>
  );
}
