import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="footer-logo">
        <img src={require('../Code4FtlLogo.png')} className="footerlogo"/>
      </div>
      <div className="contact">
        <p>Contact Code for Fort Lauderdale</p>
        <p>Github Link </p>
      </div>
    </footer>
  )
}

export default Footer;
