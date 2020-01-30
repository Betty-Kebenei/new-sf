import React, { useState } from 'react';
import Modal from 'react-modal';
import SupportModal from './SupportModal';
import MembershipModal from './MembershipModal';

const About = () => {
  const [isSupportModalOpen, setIsSupportModalOpen] = useState(false);
  const [isMembershipModalOpen, setIsMembershipModalOpen] = useState(false);

  const openAndCloseSupportModal = () => {
    setIsSupportModalOpen(!isSupportModalOpen);
  };

  const openAndCloseMembershipModal = () => {
    setIsMembershipModalOpen(!isMembershipModalOpen);
  };

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  const dummyAbout =
    'A group of like-minded individuals who have joined to ' +
    'create synergy through our various skills, giftings and ' +
    'talents to see how best we can live out our calling of sending.';
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
          <button
            type="button"
            className="about-general-become-member"
            onClick={() => openAndCloseMembershipModal()}
          >
            <span>Become a member</span>
            <span> +</span>
          </button>
          <button
            type="button"
            className="about-general-support"
            onClick={() => openAndCloseSupportModal()}
          >
            <b>SUPPORT</b>
          </button>
        </div>
        <div className="about-who">
          <p className="about-who-title">Who are we...</p>
          <p className="about-who-body">{dummyAbout}</p>
          <br />
          <br />
          <p>
            <b>Dare to be a Daniel!</b>
          </p>
          <p>
            <b>Dare to stand alone!</b>
          </p>
          <p>
            <b>Dare to have a purpose firm!</b>
          </p>
          <p>
            <b>Dare to make it known!</b>
          </p>
        </div>
      </div>

      <Modal
        ariaHideApp={false}
        isOpen={isSupportModalOpen}
        onRequestClose={() => openAndCloseSupportModal()}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <SupportModal
          isOpen={isSupportModalOpen}
          openAndCloseSupportModal={openAndCloseSupportModal}
        />
      </Modal>

      <Modal
        ariaHideApp={false}
        isOpen={isMembershipModalOpen}
        onRequestClose={() => openAndCloseMembershipModal()}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <MembershipModal
          isOpen={isMembershipModalOpen}
          openAndCloseMembershipModal={openAndCloseMembershipModal}
        />
      </Modal>
    </div>
  );
};
export default About;
