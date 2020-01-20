import React from 'react';
import allQuotes from './QuotesArray';
import sendMePic from '../../images/send-me.jpg';

const Quotes = () => {
  return (
    <div className="quotes">
      <img src={sendMePic} alt="send me" />
      <div className="quotes-section">
        <p>{allQuotes}</p>
      </div>
    </div>
  );
};
export default Quotes;
