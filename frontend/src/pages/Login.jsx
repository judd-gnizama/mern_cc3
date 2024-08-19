import { Form, Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/Login";
import { FormRow, Logo } from "../components";
import { useState } from "react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Wrapper>
      <div className="article">
        <Logo />
        <h2 className="section-title">Welcome back!</h2>
        <p>
          Don't have any account yet?{"  "}
          <Link to="/register" className="link">
            Sign up now
          </Link>
        </p>
        <Form className="form">
          <FormRow type="email" name="email" labelText="email address" />
          <FormRow
            type="password"
            name="password"
            show={showPassword}
            setShow={setShowPassword}
            isPassword
          />
          <div className="utils">
            <label htmlFor="remember">
              <input type="checkbox" name={"remember"} />
              Remember be
            </label>
            <Link className="link">Forgot Password?</Link>
          </div>

          <button type="submit" className="btn btn-primary">
            Log in
          </button>
        </Form>
      </div>
    </Wrapper>
  );
};

export default Login;
