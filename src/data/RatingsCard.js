import React from "react";
import Ratings from "../components/Ratings";

function RatingsCard() {
  return (
    <div>
      <Ratings
        rating={4.5}
        comment="This is a great product!"
        imageSrc={
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmVzc2lvbmFsJTIwYnVzaW5lc3MlMjBwb3J0cmFpdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60"
        }
        authorName="John Doe"
      />
    </div>
  );
}

export default RatingsCard;
