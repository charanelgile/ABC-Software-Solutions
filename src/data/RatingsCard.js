import React from "react";
import Ratings from "../components/Ratings";

function RatingsCard() {
  return (
    <div className="d-flex">
      <Ratings
        rating={4.5}
        comment="I've been using ABC Software Solutions Tech's products for over a year now, and I'm extremely impressed with their reliability and performance. The team behind these solutions is highly responsive to any inquiries and provides excellent customer support. Keep up the great work!"
        imageSrc="path/to/image.jpg"
        authorName="John Doe"
      />

    <Ratings
        rating={5}
        comment="ABC Software Solutions Tech's latest update is a game-changer! The new features they introduced have significantly improved our productivity and efficiency. I highly recommend their software to anyone looking to streamline their operations."
        imageSrc="path/to/image.jpg"
        authorName="Jane Smith"
      />
       <Ratings
        rating={4}
        comment="As a developer, I can't say enough good things about ABC Software Solutions Tech's APIs. They are well-documented, easy to integrate, and incredibly powerful. Thanks to their APIs, I was able to add advanced functionalities to my app without much hassle."
        imageSrc="path/to/image.jpg"
        authorName="Michael Johnson"
      />

<Ratings
        rating={3.5}
        comment="ABC Software Solutions Tech's user interface is sleek and intuitive. Even non-tech-savvy users can quickly navigate through the platform with ease. It's refreshing to see such a user-friendly software solution in the market."
        imageSrc="path/to/image.jpg"
        authorName="Sarah Thompson"
      />
    </div>
  );
}

export default RatingsCard;
