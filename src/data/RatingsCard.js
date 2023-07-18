import React from "react";
import Ratings from "../components/Ratings";

function RatingsCard() {
  return (
    <div>
      <Ratings
        rating={4.5}
        comment="This is a great product!"
        imageSrc="path/to/image.jpg"
        authorName="John Doe"
      />
    </div>
  );
}

export default RatingsCard;
