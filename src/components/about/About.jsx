import React, { useState } from 'react';
import SupportModal from './SupportModal';

const About = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openAndCloeSupportModal = () => {
    setIsOpen(!isOpen);
  };

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
    <div id="about">
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
          <button
            type="button"
            className="about-general-support"
            onClick={() => openAndCloeSupportModal()}
          >
            <b>SUPPORT</b>
          </button>
        </div>
        <div className="about-who">
          <p className="about-who-title">Who are we...</p>
          <p className="about-who-body">{dummyAbout}</p>
        </div>
      </div>
      <SupportModal isOpen={isOpen} openAndCloeSupportModal={openAndCloeSupportModal} />

      {/* <div className="support-modal">
        <h2>Ways in which you could support:</h2>
        <h3>Through prayer</h3>
        <h3>Through financial giving</h3>
        <p>You could give your contribution via;</p>
        <p>our M-pesa number: +254746</p>
      </div> */}
    </div>
  );
};
export default About;
