import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

const TestimonialsCard = ({ imageSrc, name, text, logoSrc, readMoreLink }) => {
  return (
    <div>
      <Card style={{ width: '25rem' }} className='text-center'>
        <Card.Body>
          <Image src={imageSrc} thumbnail width={300} />
          <Card.Subtitle className="mb-2 mt-2 text-muted">{name}</Card.Subtitle>
          <Card.Text>{text}</Card.Text>
          <div className='logo'>
            <Image src={logoSrc} width={75} />
          </div>
        </Card.Body>
        <Card.Link href={readMoreLink} className='mb-2'>Read more</Card.Link>
      </Card>
    </div>
  );
}

TestimonialsCard.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  logoSrc: PropTypes.string.isRequired,
  readMoreLink: PropTypes.string.isRequired,
};

export default TestimonialsCard;
