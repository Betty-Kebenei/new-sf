import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import allQuotes from './QuotesArray';

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
        <img src="https://res.cloudinary.com/dkp2ocmaw/image/upload/v1580564421/send-me_dwciad.jpg" alt="send me" />
        <div className="quotes-section">
          <p>{allQuotes[0]}</p>
        </div>
      </div>
      <div>
        <img src="https://res.cloudinary.com/dkp2ocmaw/image/upload/v1580564421/send-me_dwciad.jpg" alt="send me" />
        <div className="quotes-section">
          <p>{allQuotes[1]}</p>
        </div>
      </div>
      <div>
        <img src="https://res.cloudinary.com/dkp2ocmaw/image/upload/v1580564421/send-me_dwciad.jpg" alt="send me" />
        <div className="quotes-section">
          <p>{allQuotes[2]}</p>
        </div>
      </div>
      <div>
        <img src="https://res.cloudinary.com/dkp2ocmaw/image/upload/v1580564421/send-me_dwciad.jpg" alt="send me" />
        <div className="quotes-section">
          <p>{allQuotes[3]}</p>
        </div>
      </div>
      <div>
        <img src="https://res.cloudinary.com/dkp2ocmaw/image/upload/v1580564421/send-me_dwciad.jpg" alt="send me" />
        <div className="quotes-section">
          <p>{allQuotes[4]}</p>
        </div>
      </div>
      <div>
        <img src="https://res.cloudinary.com/dkp2ocmaw/image/upload/v1580564421/send-me_dwciad.jpg" alt="send me" />
        <div className="quotes-section">
          <p>{allQuotes[5]}</p>
        </div>
      </div>
      <div>
        <img src="https://res.cloudinary.com/dkp2ocmaw/image/upload/v1580564421/send-me_dwciad.jpg" alt="send me" />
        <div className="quotes-section">
          <p>{allQuotes[6]}</p>
        </div>
      </div>
      <div>
        <img src="https://res.cloudinary.com/dkp2ocmaw/image/upload/v1580564421/send-me_dwciad.jpg" alt="send me" />
        <div className="quotes-section">
          <p>{allQuotes[7]}</p>
        </div>
      </div>
      <div>
        <img src="https://res.cloudinary.com/dkp2ocmaw/image/upload/v1580564421/send-me_dwciad.jpg" alt="send me" />
        <div className="quotes-section">
          <p>{allQuotes[8]}</p>
        </div>
      </div>
      <div>
        <img src="https://res.cloudinary.com/dkp2ocmaw/image/upload/v1580564421/send-me_dwciad.jpg" alt="send me" />
        <div className="quotes-section">
          <p>{allQuotes[9]}</p>
        </div>
      </div>
    </Carousel>
  );
};
export default Quotes;
