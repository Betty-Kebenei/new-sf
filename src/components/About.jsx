import React from 'react';

const About = () => {
  const dummyAbout =
    'Pellentesque habitant morbi tristique senectus et netus' +
    'et malesuada fames ac turpis egestas. Vestibulum tortor' +
    'quam, feugiat vitae, ultricies eget, tempor sit amet, ante. ' +
    'Donec eu libero sit amet quam egestas semper. Aenean ultricies ' +
    'mi vitae est. Mauris placerat eleifend leo. Quisque sit amet ' +
    'est et sapien ullamcorper pharetra. Vestibulum erat wisi, ' +
    'condimentum sed, commodo vitae, ornare sit amet, wisi. ' +
    'Aenean fermentum, elit eget tincidunt condimentum, ' +
    'eros ipsum rutrum orci, sagittis tempus lacus enim ac dui.' +
    'Donec non enim in turpis pulvinar facilisis. Ut felis. ' +
    'Praesent dapibus, neque id cursus faucibus, tortor neque ' +
    'egestas augue, eu vulputate magna eros eu erat. Aliquam erat ' +
    'volutpat. Nam dui mi, tincidunt quis, accumsan porttitor,' +
    'facilisis luctus, metus';
  return (
    <div className="about">
      <div className="about-general">
        <p>
          <b>IMPACTING NATIONS</b> WITH THE
          <b> GOSPEL</b> BY
          <b> PARTNERING</b> WITH
          <b> MISSIONARIES</b>
        </p>
        <button type="button" className="about-general-become-member">
          <span>Become a member</span>
          <span> +</span>
        </button>
        <button type="button" className="about-general-support">
          <b>SUPPORT</b>
        </button>
      </div>
      <div className="about-who">
        <p className="about-who-title">Who are we...</p>
        <p className="about-who-body">{dummyAbout}</p>
      </div>
    </div>
  );
};
export default About;
