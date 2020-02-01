/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';

const SupportModal = ({ openAndCloseSupportModal }) => {
  return (
    <div className="about-modal">
      <div className="about-modal-close-icon">
        <img
          src="https://res.cloudinary.com/dkp2ocmaw/image/upload/v1580564413/cancel_eagwim.svg"
          alt="close icon"
          onClick={() => openAndCloseSupportModal()}
        />
      </div>
      <h2>Ways in which you can support:</h2>
      <h3>A. Through prayer</h3>
      <p>
        Kindly send us an email through <b>senders.fellowship@gmail.com</b>{' '}
        stating how frequently you who like to receive the prayer points.
      </p>

      <h3>B. Through financial giving</h3>
      <p>You could give your contribution via our M-pesa Paybill: </p>
    </div>
  );
};
export default SupportModal;
