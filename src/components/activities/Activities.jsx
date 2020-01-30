import React from 'react';
import meetingPic from '../../images/meeting-pic.jpeg';
import financialPic from '../../images/financial-pic.jpeg';
import logisticsPic from '../../images/logistics-pic.jpeg';
import moralPic from '../../images/moral-pic.jpg';
import prayerPic from '../../images/prayer-pic.jpg';
import reEntryPic from '../../images/re-entry-pic.jpeg';
import visitsPic from '../../images/visits-pic.jpeg';

const Activities = () => {
  return (
    <div className="activities" id="activities">
      <div className="activities-title">
        <h2>ACTIVITIES</h2>
      </div>
      <div className="activities-body">
        <div className="activity-card">
          <div className="activity-card-inner">
            <div className="activity-card-front">
              <img src={meetingPic} alt="Avatar" />
            </div>
            <div className="activity-card-back">
              <h2>Monthly meetings</h2>
              <p>Meeting monthly for fellowships</p>
              <p>
                "The mark of a great church is not its seating capacity,
                but its sending capacity." ~ Mike Stachura
              </p>
            </div>
          </div>
        </div>
        <div className="activity-card">
          <div className="activity-card-inner">
            <div className="activity-card-front">
              <img src={financialPic} alt="Avatar" />
            </div>
            <div className="activity-card-back">
              <h2>Monthly financially contributions</h2>
              <p>Contributing monthly for support</p>
              <p>
                "You can give without loving. But you cannot love without
                giving." ~ Amy Carmichael
              </p>
            </div>
          </div>
        </div>
        <div className="activity-card">
          <div className="activity-card-inner">
            <div className="activity-card-front">
              <img src={logisticsPic} alt="Avatar" />
            </div>
            <div className="activity-card-back">
              <h2>Missionary logistics support</h2>
              <p>Helping out with the logistics</p>
              <p>
                "We must be global Christians with a global vision because our
                God is a global God." ~ John Stott
              </p>
            </div>
          </div>
        </div>
        <div className="activity-card">
          <div className="activity-card-inner">
            <div className="activity-card-front">
              <img src={moralPic} alt="Avatar" />
            </div>
            <div className="activity-card-back">
              <h2>Missionary moral support</h2>
              <p>Listening to them</p>
              <p>
                "Let my heart be broken with the things that break God's heart."
                ~ Bob Pierce
              </p>
            </div>
          </div>
        </div>
        <div className="activity-card">
          <div className="activity-card-inner">
            <div className="activity-card-front">
              <img src={prayerPic} alt="Avatar" />
            </div>
            <div className="activity-card-back">
              <h2>Weekly prayer and fasting</h2>
              <p>Praying weekly for a specific missionary</p>
              <p>
                "Prayer is the mighty engine that is to move the missionary
                work." ~ A.B. Simpson
              </p>
            </div>
          </div>
        </div>
        <div className="activity-card">
          <div className="activity-card-inner">
            <div className="activity-card-front">
              <img src={reEntryPic} alt="Avatar" />
            </div>
            <div className="activity-card-back">
              <h2>Missionary re-entry support</h2>
              <p>
                Praticipating in finding a place for the missionaries to stay
                during their furlough.
              </p>
              <p>
                "If Jesus Christ be God and died for me, then no sacrifice can
                be too great for me to make for Him." ~ C.T. Studd
              </p>
            </div>
          </div>
        </div>
        <div className="activity-card">
          <div className="activity-card-inner">
            <div className="activity-card-front">
              <img src={visitsPic} alt="Avatar" />
            </div>
            <div className="activity-card-back">
              <h2>Missionary visits</h2>
              <p>Going to visit frontier missioneries on the mission field</p>
              <p>
                "Love is the root of missions; sacrifice is the fruit of
                missions." ~ Roderick Davis
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Activities;
