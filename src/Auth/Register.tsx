import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Button, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { register } from "../redux/Slices/UserSlice";
import InnerPageDecor from "../Components/OtherPageCommon/InnerPageDecor";

type UserData = {
  username: string;
  email: string;
  password: string;
};

const Register = () => {
  const [userData, setUserData] = useState<UserData>({ username: "", email: "", password: "" });
  const { username, email, password } = userData;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const signUp = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(register({ email: email, password: password, username: username, navigate }));
  };

  return (
    <div>
      <section className="authentication-form">
        <InnerPageDecor />
        <div>
          <h2 className="title text-center">
            It's Free<span> Join US</span>
          </h2>
          <p className="text-center">Welcome to tovo, Please join us with your personal account information.</p>
          <div className="card">
            <Form className="theme-form">
              <Form>
                <FormGroup className="md-fgrup-margin">
                  <Input type="text" placeholder="username" name="username" value={username} onChange={handleChange} />
                </FormGroup>
              </Form>

              <FormGroup>
                <Input type="email" placeholder="Enter email" name="email" value={email} onChange={handleChange} />
              </FormGroup>
              <FormGroup>
                <Input type="password" placeholder="Enter password" name="password" value={password} onChange={handleChange} />
              </FormGroup>

              <Row className="form-group">
                <div className="custom-control custom-checkbox col-6">
                  <Input className="custom-control-input" type="checkbox" />
                  <Label className="custom-control-label">Remember me</Label>
                </div>
                <Link className="text-right col-6 theme-link" to="#javascript">
                  lost your password
                </Link>
              </Row>
              <div className="form-button text-center">
                <Button className="btn btn-custom theme-color" onClick={signUp}>
                  Sign Up
                </Button>
              </div>
              <div className="or-saparator">
                <span>or</span>
              </div>
              <Link to={"/"} className="text-decoration-none">
                <h6 className="text-center mt-0 mb-3 text-red">Sign In</h6>
              </Link>
            </Form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
