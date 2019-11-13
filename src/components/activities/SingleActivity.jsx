import React from 'react';

const SingleActivity = ({ activity }) => {
  return (
    <div className="activities-body-activity">
      <h2 className="activities-activity-title">{activity.title}</h2>
      <p className="activities-activity-description">{activity.description}</p>
    </div>
  );
};
export default SingleActivity;
