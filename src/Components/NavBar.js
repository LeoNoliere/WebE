import React from 'react';
import { Link } from 'react-router-dom';

const NavBar= () =>{
    return (
    <div>
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