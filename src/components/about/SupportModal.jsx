/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import closeIcon from '../../images/cancel.svg';

const SupportModal = ({ openAndCloseSupportModal }) => {
  const [formValues, setFormValues] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phonenumber: '',
    frequency: '',
  });

  const handleChange = event => {
    const updatedFormValues = [...formValues];
    updatedFormValues[event.target.name] = event.target.value;
    setFormValues(updatedFormValues);
  };

  const handleSubmit = event => {
    event.preventDEfault();
    console.log('submiting');
  };

  return (
    <div className="about-modal">
      <div className="about-modal-close-icon">
        <img
          src={closeIcon}
          alt="close icon"
          onClick={() => openAndCloseSupportModal()}
        />
      </div>
      <h2>Ways in which you can support:</h2>
      <h3>A. Through prayer</h3>
      <form className="about-modal-form" onSubmit={handleSubmit}>
        <p>Fill this form if you wish to support through prayer</p>
        <div className="about-modal-form-group-field">
          <div className="about-modal-form-group-field-label">
            <label htmlFor="firstname">Firstname</label>
          </div>
          <div className="about-modal-form-group-field-input">
            <input
              id="firstname"
              type="text"
              value={formValues.firstname}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="about-modal-form-group-field">
          <div className="about-modal-form-group-field-label">
            <label htmlFor="lastname">Lastname</label>
          </div>
          <div className="about-modal-form-group-field-input">
            <input
              id="htmlFor"
              type="text"
              value={formValues.lastname}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="about-modal-form-group-field">
          <div className="about-modal-form-group-field-label">
            <label htmlFor="email">Email</label>
          </div>
          <div className="about-modal-form-group-field-input">
            <input
              id="email"
              type="email"
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="about-modal-form-group-field">
          <div className="about-modal-form-group-field-label">
            <label htmlFor="phonenumber">Phone Number</label>
          </div>
          <div className="about-modal-form-group-field-input">
            <input
              id="phonenumber"
              type="text"
              value={formValues.phonenumber}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="about-modal-form-select-field">
          <div>
            <label htmlFor="firstname">
              How frequently would you like to receive prayer items?
            </label>
          </div>
          <div className="about-modal-form-select-field-select">
            <select id="frequency">
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
            </select>
          </div>
        </div>
        <input
          className="about-modal-form-submit-button"
          type="submit"
          value="SUBMIT"
        />
      </form>

      <h3>B. Through financial giving</h3>
      <p>You could give your contribution via;</p>
      <p>our M-pesa Paybill: </p>
    </div>
  );
};
export default SupportModal;
