import React from 'react';

const Nav = () => {
  return (
    <header>
      <a className="hamburger-container">
      	<div className="top"></div>
    		<div className="middle"></div>
        <div className="bottom"></div>

        <ul className="menu">
      		<a href="#"> <li>Home</li></a>
          <a href="#"> <li>Search</li></a>
      		<a href="#"> <li>Speakers</li></a>
      		<a href="#"> <li>Contact</li></a>
        </ul>
      </a>
      <img src={require('../Code4FtlLogo.png')} className="logo"/>
    </header>
  )
}

export default Nav;
