import React from 'react';
import '../CSS/NavBar.css';
import { Link } from 'react-router-dom';

const NavBar= () =>{
    return (
    <div class="navbar">
      <li>
        <Link to="/">Intro</Link>
      </li>
      <li>
        <Link to="/main">Main</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </div>
    );
  }
  export default NavBar;