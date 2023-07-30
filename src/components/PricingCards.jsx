import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ArrowRightTwoToneIcon from '@mui/icons-material/ArrowRightTwoTone';

function PricingCards({ headerTitle, cardTitle, cardSubtitle, price, buttonText, listItems }) {
  return (
    <div className="container">
      <Card style={{ width: '18rem' }}>
        <Card.Header className="bg-info">{headerTitle}</Card.Header>
        <Card.Body>
          <Card.Title>{cardTitle}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{cardSubtitle}</Card.Subtitle>
          <Card.Text className='text-center'>
            <h1>{price}</h1>
           <p> Per use per month</p>
            <Button variant="primary" className='rounded rounded-5 px-5 text-center'>
            {buttonText}
            </Button>
          </Card.Text>
          
          <ul className='list-group list-group-flush'>
            {listItems.map((item, index) => (
              <li className='list-group-item' key={index}>
                <ArrowRightTwoToneIcon />{item}
              </li>
            ))}
          </ul>
        </Card.Body>
      </Card>
    </div>
  );
}

export default PricingCards;
