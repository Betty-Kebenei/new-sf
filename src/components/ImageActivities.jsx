import React from 'react';

// eslint-disable-next-line react/prop-types
const ImageActivities = ({ activity }) => {
  console.log(activity);
  const styles = {
    // eslint-disable-next-line react/prop-types
    backgroundImage: `url(${activity.imageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className="images-in-activities" style={styles}>
      <h2>{activity.title}</h2>
      <p>{activity.description}</p>
    </div>
  );
};
export default ImageActivities;
