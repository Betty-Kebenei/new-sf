import React from 'react';
import logo from '../../images/logo.png';

const Header = () => {
  return (
    <div className="header">
      <div className="header-menu">
        <p>menu</p>
      </div>
      <div className="header-logo">
        <img src={logo} alt="logo" />
      </div>
    </div>
  );
};
export default Header;
