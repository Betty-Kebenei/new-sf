/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import Menu from './Menu';
import logo from '../../images/logo.png';
import hamburger from '../../images/menu-icon.svg';
import MenuContext from '../../context/menu-context';

const Header = () => {
  return (
    <MenuContext.Consumer>
      {context => (
        <div className="header">
          <div className="header-section">
            <div className="header-section-hamburger">
              <img
                src={hamburger}
                alt="menu icon"
                onClick={() => context.openAndCloseMenu(true)}
              />
            </div>
            <div className="header-section-logo">
              <img src={logo} alt="logo" />
            </div>
          </div>
          <Menu
            openMenu={context.openMenu}
            openAndCloseMenu={context.openAndCloseMenu}
          />
        </div>
      )}
    </MenuContext.Consumer>
  );
};
export default Header;
