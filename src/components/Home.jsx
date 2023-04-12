import React from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../App.css";

const Home = () => {
  return (
    <>
      <Container
        className="mt-3 d-flex align-items-center justify-content-center"
        style={{
          height: "90vh",
        }}
      >
        <Button variant="dark">
          <Link style={{ color: "white" }} to="registration">
            Register Now
          </Link>
        </Button>
      </Container>
    </>
  );
};

export default Home;