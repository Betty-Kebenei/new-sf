/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

const Menu = ({ openMenu, openAndCloseMenu }) => {
  return (
    <div className={`header-menu ${openMenu ? 'active' : ''}`}>
      <div className="header-menu-close">
        <img
          src="https://res.cloudinary.com/dkp2ocmaw/image/upload/v1580564413/cancel_eagwim.svg"
          alt="close icon"
          onClick={() => openAndCloseMenu(false)}
        />
      </div>
      <ul className="header-menu-items">
        <li onClick={() => openAndCloseMenu(false)}>
          <a href="#about">About</a>
        </li>
        <li onClick={() => openAndCloseMenu(false)}>
          <a href="#mission">Mission, Vision and Values</a>
        </li>
        <li onClick={() => openAndCloseMenu(false)}>
          <a href="#leadership">Leadership</a>
        </li>
        <li onClick={() => openAndCloseMenu(false)}>
          <a href="#activities">Activities</a>
        </li>
        {/* TODO */}
        {/* <li onClick={() => openAndCloseMenu(false)}>
          <a href="#achievements">Achievements</a>
        </li>
        <li onClick={() => openAndCloseMenu(false)}>
          <a href="#goals">Goals</a>
        </li> */}
        <li onClick={() => openAndCloseMenu(false)}>
          <a href="#contacts">Contacts</a>
        </li>
      </ul>
    </div>
  );
};
export default Menu;
