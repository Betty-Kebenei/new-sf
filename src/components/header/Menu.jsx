/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import close from '../../images/cancel.svg';

const Menu = ({ openMenu, openAndCloseMenu }) => {
  return (
    <div className={`header-menu ${openMenu ? 'active' : ''}`}>
      <div className="header-menu-close">
        <img
          src={close}
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
          <a href="#activities">Activities</a>
        </li>
        <li onClick={() => openAndCloseMenu(false)}>
          <a href="#achievements">Achievements</a>
        </li>
        <li onClick={() => openAndCloseMenu(false)}>
          <a href="#goals">Goals</a>
        </li>
        <li onClick={() => openAndCloseMenu(false)}>
          <a href="#contacts">Contacts</a>
        </li>
      </ul>
    </div>
  );
};
export default Menu;
