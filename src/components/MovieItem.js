import React from 'react';
import { Card } from 'react-bootstrap';

const MovieItem = ({ name, birthyear, image, children }) => {
  return (
    <Card style={{ width: '18rem' }} className="movie">
      <Card.Img variant="top" src={image} className="movie-img" />
      <Card.Body>
        <Card.Title>{name.charAt(0) + name.slice(1)}</Card.Title>
        <Card.Text>
          <strong>Birth year:</strong> {birthyear}{' '}
        </Card.Text>
        {children}
      </Card.Body>
    </Card>
  );
};

export default MovieItem;
