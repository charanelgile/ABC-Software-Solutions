import React from 'react';
import TestimonialsCard from '../components/TestimonialsCard';

const Testimonials = () => {
  return (
    <div>
      <h1>Testimonials</h1>
      <TestimonialsCard
        imageSrc="https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
        name="John Legend"
        text="Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content."
        logoSrc="https://pic.onlinewebfonts.com/svg/img_94963.png"
        readMoreLink="#"
      />
    </div>
  );
}

export default Testimonials;
