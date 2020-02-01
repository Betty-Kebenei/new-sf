/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import Menu from './Menu';
import MenuContext from '../../context/menu-context';

const Header = () => {
  return (
    <MenuContext.Consumer>
      {context => (
        <div className="header">
          <div className="header-section">
            <div className="header-section-hamburger">
              <img
                src="https://res.cloudinary.com/dkp2ocmaw/image/upload/v1580564410/menu-icon_wqfjfi.svg"
                alt="menu icon"
                onClick={() => context.openAndCloseMenu(true)}
              />
            </div>
            <div className="header-section-logo">
              <img src="https://res.cloudinary.com/dkp2ocmaw/image/upload/v1580564410/logo_j9n2po.png" alt="logo" />
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
