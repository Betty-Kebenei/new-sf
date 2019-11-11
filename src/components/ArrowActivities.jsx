/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';

// eslint-disable-next-line react/prop-types
const ArrowActivities = ({ direction, clickFunction, glyph }) => {
  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div className={`slide-arrow ${direction}`} onClick={clickFunction}>
      {glyph}
    </div>
  );
};
export default ArrowActivities;
