import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";
import { useFormik } from "formik";
import * as yup from "yup";

const initialValues = {
  email: "",
  name: "",
  dob: "",
  password: "",
  cpassword: "",
  terms: false,
};

const registerSchema = yup.object().shape({
  email: yup.string().email().required("Please Enter Your Email"),
  name: yup.string().min(2).max(25).required("Please Enter Your Name"),
  dob: yup.string().required("Please Enter Your dob"),
  password: yup.string().min(8).required("Please Enter Your Password"),
  cpassword: yup
    .string()
    .oneOf([yup.ref("password")], "Password Doesn't Match! Please Check")
    .required(),
  terms: yup.bool().required().oneOf([true], "Terms must be accepted"),
});

const RegistrationValidation = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: registerSchema,
      onSubmit: (values, action) => {
        console.log(values);
        action.resetForm();
      },
    });

  return (
    <Container
      style={{
        width: "40%",
        height: "90vh",
        marginTop: 20,
      }}
    >
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            autoComplete="off"
            placeholder="E-mail"
          />
          {errors.email && touched.email ? (
            <p style={{ color: "red" }}>{errors.email}</p>
          ) : null}
        </Form.Group>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={values.name}
            autoComplete="off"
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Name"
          />
          {errors.name && touched.name ? (
            <p style={{ color: "red" }}>{errors.name}</p>
          ) : null}
        </Form.Group>
        <Form.Group className="mb-3" controlId="dob">
          <Form.Label>Date Of Birth</Form.Label>
          <Form.Control
            type="date"
            name="dob"
            value={values.dob}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.dob && touched.dob ? (
            <p style={{ color: "red" }}>{errors.bob}</p>
          ) : null}
        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            placeholder="Password"
          />
          {errors.password && touched.password ? (
            <p style={{ color: "red" }}>{errors.password}</p>
          ) : null}
        </Form.Group>

        <Form.Group className="mb-3" controlId="cpassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            name="cpassword"
            value={values.cpassword}
            onChange={handleChange}
            placeholder="Re-enter your password"
          />
          {errors.cpassword && touched.cpassword ? (
            <p style={{ color: "red" }}>{errors.cpassword}</p>
          ) : null}
        </Form.Group>
        <Form.Group className="mb-3" controlId="terms">
          <Form.Check
            type="checkbox"
            name="terms"
            label="Agree to terms and conditions"
            value={values.terms}
            onChange={handleChange}
          />
          {errors.terms && touched.terms ? (
            <p style={{ color: "red" }}>{errors.terms}</p>
          ) : null}
        </Form.Group>
        <Button className="w-100" variant="primary" type="submit">
          Submit
        </Button>
        <Button className="w-100 mt-2" variant="danger" type="Reset">
          Reset
        </Button>
      </Form>
    </Container>
  );
};

export default RegistrationValidation;