import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RegistrationForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [checked, setChecked] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    if (
      email === "" ||
      name === "" ||
      dob === "" ||
      password === "" ||
      cpassword === "" ||
      checked === false
    ) {
      notifyError("please enter all the values correctly");
    } else if (password !== cpassword) {
      notifyError("Password Doesn't Match! Please Check.");
    } else {
      console.log(email, name, dob, password, cpassword, checked);
      notifySuccess("Form is submitted");
      handleReset();
    }
  };

  const handleReset = () => {
    setEmail("");
    setName("");
    setDob("");
    setPassword("");
    setCpassword("");
    setChecked(false);
  };
  const notifyError = (text) =>
    toast.error(text, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  const notifySuccess = (text) =>
    toast.success(text, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
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
              name={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Enter email"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name={name}
              placeholder="Enter name"
              onChange={(e) => {
                setName(e.target.value);
              }}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Date Of Birth</Form.Label>
            <Form.Control
              type="date"
              name={dob}
              onChange={(e) => {
                setDob(e.target.value);
              }}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name={password}
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCpassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              name={cpassword}
              placeholder="Re-enter your password"
              onChange={(e) => {
                setCpassword(e.target.value);
              }}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              name="check"
              label="Agree to terms and conditions"
              onChange={() => {
                setChecked(!checked);
              }}
              required
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
          <Button
            className="w-100 mt-2"
            variant="danger"
            onClick={handleReset}
            type="Reset"
          >
            Reset
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default RegistrationForm;
