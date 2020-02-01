/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

const MembershipModal = ({ openAndCloseMembershipModal }) => {
  return (
    <div className="about-modal">
      <div className="about-modal-close-icon">
        <img
          src="https://res.cloudinary.com/dkp2ocmaw/image/upload/v1580564413/cancel_eagwim.svg"
          alt="close icon"
          onClick={() => openAndCloseMembershipModal()}
        />
      </div>
      <div>
        <h3>Who is qualified to be a member?</h3>
        <ol>
          <li>One who is a born again christian.</li>
          <li>One who is willing to embrace missions.</li>
          <li>
            One who is ready to sacrifice one&apos;s time, financial resources
            and skills or talents for the advancement of the kingdom of God.
          </li>
          <li>
            One who is flexible to adjust to changes and developments in the
            fellowship.
          </li>
        </ol>

        <h3>Responsibilities of a member:</h3>
        <ol>
          <li>Attending monthly fellowships.</li>
          <li>Contribution of the ministry support by 5th of every month.</li>
          <li>Engaging in weekily prayer and fasting.</li>
          <li>
            Being actively involved in the fellowship&apos;s activities e.g
            vision casting, retreats, visiting missionaries in the field etc.
          </li>
          <li>Choosing leaders and embracing assigned tasks.</li>
          <li>Reading a book selected by members.</li>
        </ol>

        <h3>How to become a member:</h3>
        <ol>
          <li>
            Fill the membership{' '}
            <a href="https://docs.google.com/forms/d/1ahkKQ6u6zk6fqz2UxT6fvUUa6lYgwmTZBSO33bUXL7U/viewform?edit_requested=true">
              form
            </a>
            .
          </li>
          <li>Wait for review and feedback.</li>
        </ol>

        <h3>Review of membership:</h3>
        <ul>
          <li>Done every quarter.</li>
          <li>
            Review is to be done based on the commitment of the
            responsibilities.
          </li>
        </ul>
      </div>
    </div>
  );
};
export default MembershipModal;
