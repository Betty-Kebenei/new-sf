import React from 'react';
import missionIcon from '../../images/mission.png';
import visionIcon from '../../images/vision.png';
import valuesIcon from '../../images/values.png';

const DirectionDeterminants = () => {
  const mission =
    'Pellentesque habitant morbi tristique senectus et netus et malesuada' +
    'fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,' +
    'ultricies eget, tempor sit amet, ante. Donec eu libero sit amet ' +
    'quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat ' +
    'eleifend leo.';
  const vision =
    'Pellentesque habitant morbi tristique senectus et netus et malesuada' +
    ' fames ac turpis egestas.';
  return (
    <div className="direction-determinants" id="mission">
      <div className="direction-determinants-mission">
        <img src={missionIcon} alt="mission" />
        <h2>OUR MISSION</h2>
        <p>{mission}</p>
      </div>
      <div className="direction-determinants-vision">
        <img src={visionIcon} alt="vision" />
        <h2>OUR VISION</h2>
        <p>{vision}</p>
      </div>
      <div className="direction-determinants-values">
        <img src={valuesIcon} alt="values" />
        <h2>OUR CORE VALUES</h2>
        <ul>
          <li>i. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
          <li>ii. Aliquam tincidunt mauris eu risus.</li>
          <li>iii. Vestibulum auctor dapibus neque.</li>
        </ul>
      </div>
    </div>
  );
};
export default DirectionDeterminants;
