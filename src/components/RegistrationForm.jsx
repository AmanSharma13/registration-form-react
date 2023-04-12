import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";
import { useState } from "react";

const RegistrationForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [checked, setChecked] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    console.log(email, name, dob, password, cpassword, checked);
  };

  return (
    <div>
      <Container
        style={{
          width: "30%",
          height: "90vh",
          marginTop: 50,
          fontWeight: "bold",
          fontSize: "larger",
        }}
      >
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Enter email"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Enter name"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Birth Of Date</Form.Label>
            <Form.Control
              type="date"
              name="bod"
              onChange={(e) => {
                setDob(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCpassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              name="cpassword"
              placeholder="Re-enter your password"
              onChange={(e) => {
                setCpassword(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              name="agree"
              label="Agree to terms and conditions"
              onChange={() => {
                setChecked(!checked);
              }}
            />
          </Form.Group>
          <Button
            className="w-100"
            variant="primary"
            onClick={handleClick}
            type="submit"
          >
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default RegistrationForm;
