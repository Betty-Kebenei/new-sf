import React, { useState } from 'react';
import '../../public/scss/global.scss';

import MenuContext from '../context/menu-context';

import Header from './header/header';
import Quotes from './quotes/Quotes';
import About from './about/About';
import DirectionDeterminants from './mission-vision-values/DirectionDeterminants';
import Leadership from './leadership/Leadership';
import Activities from './activities/Activities';
import Footer from './footer/Footer';

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
        <Quotes />
        <About />
        <DirectionDeterminants />
        <Leadership />
        <Activities />
      </div>
      <div className="page-footer">
        <Footer />
      </div>
    </MenuContext.Provider>
  );
};
export default App;
