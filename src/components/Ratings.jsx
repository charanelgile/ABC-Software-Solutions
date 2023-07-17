import React from 'react'
import Card from 'react-bootstrap/Card';
import StarIcon from '@mui/icons-material/Star';
import Image from 'react-bootstrap/Image';

const Ratings = () => {
  return (
    <>
      <div className="container">
      <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Subtitle className="mb-2 text-muted">
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
        </Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Image src="./images/rating/harry.jpg" roundedCircle />
        <span><strong>Harry Potter</strong></span>
      </Card.Body>
    </Card>
      </div>
    </>
  )
}

export default Ratings