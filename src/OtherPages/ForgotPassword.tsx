import React from "react";
import { Link } from "react-router-dom";
import { Button, Card, Col, Form, FormGroup, Input, Row } from "reactstrap";
import InnerPageDecor from "../Components/OtherPageCommon/InnerPageDecor";

const ForgotPassword = () => {
  return (
    <section className="authentication-form">
     <InnerPageDecor/>
      <div>
        <h2 className="title text-center">
          RESET YOUR<span> PASSWORD</span>
        </h2>
        <Card>
          <Form className="theme-form">
            <FormGroup className="mt-2">
              <h6 className="mt-0 mb-3">Enter Your Mobile Number :</h6>
              <Row gap={3}>
                <Col sm={4}>
                  <Input className="digits mb-1" type="text" value="+ 91" />
                </Col>
                <Col sm={8}>
                  <Input className="digits mb-1" type="tel" value="000-000-0000" />
                </Col>
                <Col sm={12} className="mt-4">
                  <Button className="btn-custom w-100 theme-color">
                    Send
                  </Button>
                </Col>
              </Row>
            </FormGroup>
            <h6 className="text-center mt-0 mb-3">
              If don't receive OTP?
              <Link className="text-danger" to={"#javascript"}>
                Resend
              </Link>
            </h6>
            <FormGroup className="rounded p-4 bg-light">
              <label className="col-form-label pt-0 w-100">Enter OTP</label>
              <Row gap={3}>
                <Col>
                  <Input className="digits text-center opt-text" type="text" value="00" />
                </Col>
                <Col>
                  <Input className="digits text-center opt-text" type="text" value="00" />
                </Col>
                <Col>
                  <Input className="digits text-center opt-text" type="text" value="00" />
                </Col>
              </Row>
            </FormGroup>
            <FormGroup>
              <Input type="password" placeholder="Password" />
            </FormGroup>
            <FormGroup>
              <Input type="password" name="login[password]" placeholder="retype password" />
              <div className="show-hide">
                <span className="show"></span>
              </div>
            </FormGroup>
            <div className="form-button text-center">
              <Link to={'/layout'}>
              <Button className="btn-custom theme-color">
                Done
              </Button>
              </Link>
            </div>
          </Form>
        </Card>
      </div>
    </section>
  );
};

export default ForgotPassword;
