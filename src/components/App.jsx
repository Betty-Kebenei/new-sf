import React from 'react';
import '../../public/scss/global.scss';

import Header from './header/header';
import About from './About';
import DirectionDeterminants from './DirectionDeterminants';
import Activities from './activities/Activities';

const App = () => {
  return (
    <div className="hey">
      <Header />
      <About />
      <DirectionDeterminants />
      <Activities />
    </div>
  );
};
export default App;
