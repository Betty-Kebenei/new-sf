import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import allQuotes from './QuotesArray';

const Quotes = () => {
  const renderQuotes = allQuotes.map(quote => {
    return (
      <div key={quote}>
        <img src="https://res.cloudinary.com/dkp2ocmaw/image/upload/v1580564421/send-me_dwciad.jpg" alt="send me" />
        <div className="quotes-section">
          <p>{quote}</p>
        </div>
      </div>
    );
  });
  return (
    <Carousel
      className="quotes"
      showThumbs={false}
      showArrows={false}
      useKeyboardArrows
      infiniteLoop
      autoPlay
    >
      {renderQuotes}
    </Carousel>
  );
};
export default Quotes;
