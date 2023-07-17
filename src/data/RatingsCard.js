import React from 'react';
import Ratings from './components/RatingsCard';

const RatingsCard = () => {
  return (
    <div>
      <h1>Product Ratings</h1>
      <Ratings
        rating={4.5}
        comment="Some quick example text to build on the card title and make up the bulk of the card's content."
        imageSrc="./images/rating/harry.jpg"
        authorName="Harry Potter"
      />
    </div>
  );
};

export default RatingsCard;
