import React, { useState } from 'react';
import ImageActivities from './ImageActivities';
import ArrowActivities from './ArrowActivities';

import meeting from '../../public/images/meeting-pic.jpeg';

const Activities = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const activities = [
    {
      imageUrl: { meeting },
      title: 'Monthly meetings',
      description: 'Meeting monthly for fellowships',
    },
    {
      imageUrl: '../../public/images/financial-pic.jpeg',
      title: 'Monthly financially contributions',
      description: 'Contributing monthly for support',
    },
    {
      imageUrl: '../../public/images/logistics-pic.jpeg',
      title: 'Missionary logistics support',
      description: 'Helping out with the logistics',
    },
    {
      imageUrl: '../../public/images/moral-pic.jpg',
      title: 'Missionary moral support',
      description: 'Listening to them',
    },
    {
      imageUrl: '../../public/images/prayer-pic.jpg',
      title: 'Weekly prayer and fasting',
      description: 'Praying weekly for a specific missionary',
    },
    {
      imageUrl: '../../public/images/re-entry-pic.jpg',
      title: 'Missionary re-entry support',
      description: 'Helping with hosting',
    },
    {
      imageUrl: '../../public/images/visits-pic.jpeg',
      title: 'Missionary visits',
      description: 'Going to visit them on the field',
    },
  ];
  const previousActivity = () => {
    const lastIndex = activities.length - 1;
    const shouldResetIndex = currentImageIndex === 0;
    const index = shouldResetIndex ? lastIndex : currentImageIndex - 1;
    setCurrentImageIndex(index);
  };
  const nextActivity = () => {
    const lastIndex = activities.length - 1;
    const shouldResetIndex = currentImageIndex === lastIndex;
    const index = shouldResetIndex ? 0 : currentImageIndex + 1;
    setCurrentImageIndex(index);
  };
  console.log(activities);
  console.log(currentImageIndex);
  return (
    <div className="activities">
      <ArrowActivities
        direction="left"
        clickFunction={previousActivity}
        glyph="&#9664;"
      />

      <ImageActivities activity={activities[currentImageIndex]} />

      <ArrowActivities
        direction="right"
        clickFunction={nextActivity}
        glyph="&#9654;"
      />
    </div>
  );
};
export default Activities;
