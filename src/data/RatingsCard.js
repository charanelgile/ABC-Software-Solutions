import React from "react";
import Ratings from "../components/Ratings";

function RatingsCard() {
  return (
    <div className="container-fluid d-flex">
      <Ratings
        rating={4.5}
        comment="I've been using ABC Software Solutions' products for over a year now, and I'm extremely impressed with their reliability and performance. Their team is very attentive to any inquiries and provides excellent customer support."
        imageSrc="https://images.unsplash.com/photo-1612276529418-52e6ad86ee1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
        authorName="John Doe"
      />

      <Ratings
        rating={5}
        comment="ABC Software Solutions' latest update is a game-changer! The new features they introduced have significantly improved our productivity and efficiency. I highly recommend their software to anyone looking to streamline their operations."
        imageSrc="https://images.unsplash.com/photo-1579105728744-9d6b14a45389?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
        authorName="Jane Smith"
      />
      <Ratings
        rating={4}
        comment="As a developer, I can't say enough good things about ABC Software Solutions's APIs. They are well-documented, easy to integrate, and incredibly powerful. Thanks to their APIs, I was able to add advanced functionalities to my app without much hassle."
        imageSrc="https://images.unsplash.com/photo-1663417140976-2c8696d0e27d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
        authorName="Michael Johnson"
      />

      <Ratings
        rating={3.5}
        comment="ABC Software Solutions's user interface is sleek and intuitive. Even users that are not tech-savvy can quickly navigate their developed product with ease. It's so refreshing to see such a user-friendly software solution in an agile development mindset."
        imageSrc="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
        authorName="Sarah Thompson"
      />
         </div>
   
  );
}

export default RatingsCard;
