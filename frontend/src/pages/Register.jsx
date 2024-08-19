import { Form, Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/Register";
import { FormRow, Logo } from "../components";

const Register = () => {
  return (
    <Wrapper>
      <div className="section-center">
        <Logo />
        <h2 className="section-title">Welcome to Court Control!</h2>
        <p>Make court queueing easier and hassle free!</p>
        <Form className="form">
          <FormRow type="text" name="firstName" labelText="first name" />
          <FormRow type="text" name="lastName" labelText="last name" />
          <FormRow type="email" name="email" labelText="email address" />
          <FormRow type="password" name="create password" />
          <FormRow
            type="password"
            name="confirmPassword"
            labelText="confirm password"
          />
          <button type="submit" className="btn btn-primary">
            Create Account
          </button>
          <p>
            Already have an account?{" "}
            <Link to="/login" className="link">
              Log in
            </Link>
          </p>
        </Form>
      </div>
    </Wrapper>
  );
};

export default Register;
