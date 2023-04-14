import React from "react";
import { Container, Carousel } from "react-bootstrap";
// import { Link } from "react-router-dom";
import "../App.css";
import Destinations from "./Destinations";
import UpcommingTours from "./UpcommingTours";

const Home = () => {
  return (
    <main
    // style={{ backgroundColor: "red" }}
    >
      <Container className="">
        <Carousel>
          <Carousel.Item interval={700}>
            <img
              className="d-block w-100"
              src="https://i.pinimg.com/originals/f4/56/2e/f4562eb0da60ce944b1828704728789c.png"
              alt="Manali, Himachal Pradesh"
              style={{ width: "900px", height: "500px" }}
            />
            <Carousel.Caption>
              <h3>Manali, Himachal Pradesh</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100"
              src="https://www.holidify.com/images/bgImages/GANGTOK.jpg"
              alt="Gangtok Sikkim"
              style={{ width: "900px", height: "500px" }}
            />
            <Carousel.Caption>
              <h3>Gangtok Sikkim</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://img.onmanorama.com/content/dam/mm/en/travel/kerala/images/2022/11/24/munnar-gap-road.jpg"
              style={{ width: "900px", height: "500px" }}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Munnar, Kerela</h3>
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
        <UpcommingTours />
      </Container>
    </main>
  );
};

export default Home;
