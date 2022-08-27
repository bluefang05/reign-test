import React from 'react';
import "./Header.css";
import Img_Logo from '../../assets/images/hacker-news.png';

function Header() {
  return (
    <header className="test-header">
        {/* <h1 className="header-title">HACKER NEWS</h1> */}
        <img src={Img_Logo} alt='Img_Logo'/>
    </header>
  )
}

export default Header