import React from 'react';
import '../CSS/NavBar.css';
import { Link } from 'react-router-dom';

const NavBar= () =>{
    return (
    <div className="navbar">
      <li id="intro">
        <Link to="/">Intro</Link>
      </li>
      <li id="main">
        <Link to="/main">Main</Link>
      </li>
      <li id="about">
        <Link to="/about">About</Link>
      </li>
    </div>
    );
  }
  export default NavBar;