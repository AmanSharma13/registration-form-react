import React from "react";
import { Card, Button } from "react-bootstrap";

const Destination = ({ dest }) => {
  return (
    <div className="dest">
      <Card style={{ width: "20rem" }}>
        <Card.Img variant="top" src={dest.image} />
        <Card.Body>
          <Card.Title>{dest.name}</Card.Title>
          <Card.Text>${dest.price}</Card.Text>
          <Button variant="primary">Checkout</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Destination;
