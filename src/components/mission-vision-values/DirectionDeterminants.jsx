import React from 'react';

const DirectionDeterminants = () => {
  const mission =
    'Raise resources and mobilize believers in the marketplace to ' +
    'take part in froniter missions.';
  const vision =
    'To raise resources for Kingdom advancement and provide moral and ' +
    'prayer support to those who go.';
  const verse =
    'How, then, can they call on the one they have not believed in?' +
    'And how can they believe in the one of whom they have not heard?' +
    'And how can they hear without someone preaching to them?' +
    'And how can anyone preach unless they are sent?' +
    'As it is written: “How beautiful are the feet of those who bring ' +
    'good news!” ~ Romans 10:14-15 (NIV)';
  return (
    <div className="direction-determinants" id="mission">
      <div className="direction-determinants-mission">
        <img src="https://res.cloudinary.com/dkp2ocmaw/image/upload/v1580564400/mission_udpxro.png" alt="mission" />
        <h2>OUR MISSION</h2>
        <p>{mission}</p>
      </div>
      <div className="direction-determinants-vision">
        <img src="https://res.cloudinary.com/dkp2ocmaw/image/upload/v1580564407/vision_kgvjzf.png" alt="vision" />
        <h2>OUR VISION</h2>
        <p>{vision}</p>
      </div>
      <div className="direction-determinants-verse">
        <img src="https://res.cloudinary.com/dkp2ocmaw/image/upload/v1580564409/verse_hgctfj.png" alt="vision" />
        <h2>OUR THEME VERSE</h2>
        <p>{verse}</p>
      </div>
      <div className="direction-determinants-values">
        <img src="https://res.cloudinary.com/dkp2ocmaw/image/upload/v1580564420/values_dfxvq2.png" alt="verse" />
        <h2>OUR CORE VALUES</h2>
        <ul>
          <li>i. Faith in Jesus Christ.</li>
          <li>ii. Commitment.</li>
          <li>iii. Passion.</li>
        </ul>
      </div>
      <div className="direction-determinants-objectives">
        <img src="https://res.cloudinary.com/dkp2ocmaw/image/upload/v1580564404/objectives_rqwyff.png" alt="objectives" />
        <h2>OUR OBJECTIVES</h2>
        <ul>
          <li>i. Be accountable to other people called to the marketplace.</li>
          <li>ii. Raise resources for kingdom advancement.</li>
          <li>iii. Provide moral support for those who go.</li>
          <li>iv. Encourage one another.</li>
          <li>v. Brainstorm ideas.</li>
        </ul>
      </div>
    </div>
  );
};
export default DirectionDeterminants;
