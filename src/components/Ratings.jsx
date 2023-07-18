import React from 'react';
import Card from 'react-bootstrap/Card';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import Image from 'react-bootstrap/Image';

const Ratings = ({ rating, comment, imageSrc, authorName }) => {
  // Calculate the number of filled stars (whole number part of the rating)
  const filledStars = Math.floor(rating);

  // Check if there is a decimal part for half-star display
  const hasHalfStar = rating % 1 !== 0;

  // Calculate the number of empty stars
  const emptyStars = 5 - filledStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="container">
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Subtitle className="mb-2 text-warning">
            {Array.from({ length: filledStars }, (_, index) => (
              <StarIcon key={index} />
            ))}
            {hasHalfStar && <StarHalfIcon />}
            {Array.from({ length: emptyStars }, (_, index) => (
              <StarBorderOutlinedIcon key={index} style={{ opacity: 0.5 }} />
            ))}
          </Card.Subtitle>
          <Card.Text>{comment}</Card.Text>
          <Image src={imageSrc} roundedCircle className='me-3'/>
          <span>
            <strong>{authorName}</strong>
          </span>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Ratings;
