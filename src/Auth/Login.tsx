import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Button, Card, Form, FormGroup, Input, Label } from "reactstrap";
import { loginUser, setData } from "../redux/Slices/UserSlice";
import { onAuthStateChanged } from "firebase/auth";
import { collection, getDocs } from "firebase/firestore";
import { auth, db } from "../firebase.config";
import InnerPageDecor from "../Components/OtherPageCommon/InnerPageDecor";

type User = {
  id?: string;
  email: string;
  password: string;
};

const Login = () => {
  const [login, setLogin] = useState<User>({ email: "", password: "" });
  const { email, password } = login;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(loginUser({ email: email, password: password, navigate }));
  };

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        const fetchData = async () => {
          try {
            const querySnapshot = await getDocs(collection(db, "users"));
            const userData = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id } as User)).find((item) => item.email === currentUser.email);
            if (userData) {
              dispatch(setData(userData.id));
            } else {
              console.log("User not found in Database");
            }
          } catch (error) {
            console.error("Error fetching user data:", error);
          }
        };
        fetchData();
      } else {
        console.log("User is signed out");
      }
    });
  }, [login]);

  return (
    <div>
      <section className="authentication-form">
      <InnerPageDecor/>
        <div>
          <h2 className="title text-center">
            <span> Login</span>
          </h2>
          <p className="text-center">Welcome to tovo, Please Login with your personal account information.</p>
          <Card>
            <Form className="theme-form">
              <FormGroup>
                <Input type="email" placeholder="email address" name="email" value={email} onChange={handleChange} />
              </FormGroup>
              <FormGroup>
                <Input type="password" placeholder="Password" name="password" value={password} onChange={handleChange} />
                <div className="show-hide">
                  <span className="show"></span>
                </div>
              </FormGroup>
              <FormGroup className="row">
                <div className="custom-control custom-checkbox col-6">
                  <Input type="checkbox" />
                  <Label className="custom-control-label">Remember me</Label>
                </div>
                <Link className="text-right col-6 theme-link text-decoration-none" to={"#javascript"}>
                  lost your password
                </Link>
              </FormGroup>
              <div className="form-button text-center">
                <Button className="btn-custom btn-lg theme-color" onClick={handleClick}>
                  Submit
                </Button>
              </div>
              <div className="or-saparator">
                <span>or</span>
              </div>
              <Link to={"/register"} className="text-decoration-none">
                <h6 className="text-center mt-0 mb-3">Sign Up</h6>
              </Link>
            </Form>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Login;
