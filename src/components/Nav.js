import React from 'react';

const Nav = () => {
  return (

<header>
    <a className="container">
    	<div className="top"></div>
    		<div className="middle"></div>
        <div className="bottom"></div>


    <ul className="menu">
    		<a href="#"> <li>Home</li></a>
        <a href="#"> <li>Search</li></a>
    		<a href="#"> <li>Map</li></a>
    		<a href="#"> <li>Chart</li></a>
    		<a href="#"> <li>Speaker Reg</li></a>
    		<a href="#"> <li>Contact</li></a>
    </ul>
    </a>

          <img src={require('../Code4FtlLogo.png')} className="logo"/>

</header>


    // <nav>
    //   <ul className="navbar">
    //     <li className="nav-logo">
    //       <img src={require('../Code4FtlLogo.png')} className="logo"/>
    //     </li>
    //     <li> Search</li>
    //     <li> Speaker List</li>
    //     <li> Registration Form</li>
    //     <li> Contact Us</li>
    //   </ul>
    // </nav>
  )
}

export default Nav;
