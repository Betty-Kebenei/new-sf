import React, { useState } from 'react';
import '../../public/scss/global.scss';

import MenuContext from '../context/menu-context';

import Header from './header/header';
import About from './About';
import DirectionDeterminants from './DirectionDeterminants';
import Activities from './activities/Activities';

const App = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const openAndCloseMenu = value => {
    setOpenMenu(value);
  };

  return (
    <MenuContext.Provider
      value={{
        openMenu,
        openAndCloseMenu,
      }}
    >
      <div className="page-header">
        <Header />
      </div>
      <div className="page-body">
        <About />
        <DirectionDeterminants />
        <Activities />
      </div>
    </MenuContext.Provider>
  );
};
export default App;
