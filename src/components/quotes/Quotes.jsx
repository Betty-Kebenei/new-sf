import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import allQuotes from './QuotesArray';
import sendMePic from '../../images/send-me.jpg';

const Quotes = () => {
  return (
    <Carousel
      className="quotes"
      showThumbs={false}
      showArrows={false}
      useKeyboardArrows
      infiniteLoop
      autoPlay
    >
      <div>
        <img src={sendMePic} alt="send me" />
        <div className="quotes-section">
          <p>{allQuotes[0]}</p>
        </div>
      </div>
      <div>
        <img src={sendMePic} alt="send me" />
        <div className="quotes-section">
          <p>{allQuotes[1]}</p>
        </div>
      </div>
    </Carousel>
  );
};
export default Quotes;
