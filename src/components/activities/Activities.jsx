/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import SingleActivity from './SingleActivity';
import allActivities from './ActivitiesArray';

const Activities = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const previousActivity = () => {
    const lastIndex = allActivities.length - 1;
    const shouldResetIndex = currentImageIndex === 0;
    const index = shouldResetIndex ? lastIndex : currentImageIndex - 1;
    setCurrentImageIndex(index);
  };
  const nextActivity = () => {
    const lastIndex = allActivities.length - 1;
    const shouldResetIndex = currentImageIndex === lastIndex;
    const index = shouldResetIndex ? 0 : currentImageIndex + 1;
    setCurrentImageIndex(index);
  };

  const styles = {
    backgroundImage: `url(${allActivities[currentImageIndex].imageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
  };

  return (
    <div className="activities" id="activities" style={styles}>
      <div className="activities-title">
        <h2>ACTIVITIES</h2>
      </div>
      <div className="activities-body">
        <div className="activities-body-arrow" onClick={previousActivity}>
          &#9664;
        </div>

        <SingleActivity activity={allActivities[currentImageIndex]} />

        <div className="activities-body-arrow" onClick={nextActivity}>
          &#9654;
        </div>
      </div>
    </div>
  );
};
export default Activities;
