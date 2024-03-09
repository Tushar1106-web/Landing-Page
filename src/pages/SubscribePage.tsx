import { Button, Col, Container, Form, FormGroup, Input, Row } from "reactstrap";
import AngleDoubleUpIcon from "./AngleDoubleUpIcon";

const SubscribePage = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col md={8} className="offset-md-2">
            <div className="footer-text">
              <img src="../assets/images/email.png" alt="email" />
              <h2 className="title text-center md-margin-top">
                subscribe to <span>newsletter</span>
              </h2>
              <p> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
              <Form className="footer-form needs-validation" method="post">
                <FormGroup>
                  <Input type="email" placeholder="enter your email" name="EMAIL" />
                </FormGroup>
                <div className="form-button">
                  <Button className="btn-custom theme-color">send</Button>
                </div>
              </Form>
            </div>
          </Col>
          <AngleDoubleUpIcon/>
        </Row>
      </Container>
    </section>
  );
};

export default SubscribePage;
