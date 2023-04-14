import React from "react";
import { Container, Carousel } from "react-bootstrap";
// import { Link } from "react-router-dom";
import "../App.css";
import Destinations from "./Destinations";

const Home = () => {
  return (
    <>
      <Container className="mt-1">
        <Carousel>
          <Carousel.Item interval={700}>
            <img
              className="d-block w-100"
              src="https://picsum.photos/seed/picsum/1200/500"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100"
              src="https://picsum.photos/seed/picsum/1200/500"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://picsum.photos/seed/picsum/1200/500"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        {/* <Button variant="primary">
          <Link style={{ color: "white" }} to="registration">
            Register Now
          </Link>
        </Button> */}

        {/* <Button className="m-3" variant="success">
          <Link style={{ color: "white" }} to="registrationvalidation">
            Register Validation
          </Link>
        </Button> */}
        <Destinations />
      </Container>
    </>
  );
};

export default Home;
