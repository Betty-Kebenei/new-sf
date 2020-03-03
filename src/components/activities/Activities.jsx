import React from 'react';
import allActivities from './ActivitiesArray';

const Activities = () => {
  const renderActivities = allActivities.map(activity => {
    return (
      <div className="activity-card" key={activity.title}>
        <div className="activity-card-inner">
          <div className="activity-card-front">
            <img src={activity.imageUrl} alt="Avatar" />
          </div>
          <div className="activity-card-back">
            <h2>{activity.title}</h2>
            <p>{activity.description}</p>
            <p>{activity.quote}</p>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="activities" id="activities">
      <div className="activities-title">
        <h2>ACTIVITIES</h2>
      </div>
      <div className="activities-body">{renderActivities}</div>
    </div>
  );
};
export default Activities;
