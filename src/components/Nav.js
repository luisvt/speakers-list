import React from 'react';

const Nav = () => {
  return (
    <nav>
      <ul className="navbar">
        <li className="nav-logo">
          <img src={require('../Code4FtlLogo.png')} className="logo"/>
        </li>
        <li> Search</li>
        <li> Speaker List</li>
        <li> Registration Form</li>
        <li> Contact Us</li>
      </ul>
    </nav>
  )
}

export default Nav;
