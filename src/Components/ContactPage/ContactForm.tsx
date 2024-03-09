import React from "react";
import { Button, Col, FormGroup, Label, Row } from "reactstrap";
import * as Yup from "yup";
import { Field, Form, Formik } from "formik";
import swal from "sweetalert";

const ContactForm = () => {
  const validateSchema = Yup.object().shape({
    fullname: Yup.string().required("This field is required"),
    phone: Yup.number().required("This field is required").min(5),
    email: Yup.string().email("Please enter a valid email").required("This field is required"),
    message: Yup.string().required("This field is required").min(10),
  });

  return (
    <Row>
      <Col md={12} lg={8} sm={12}>
        <div className="contact-us">
          <div className="w-100">
            <h2 className="title">
              <span>contact </span>information
            </h2>
            <Formik
              initialValues={{
                fullname: "",
                phone: "",
                email: "",
                message: "",
              }}
              validationSchema={validateSchema}
              onSubmit={(values, { resetForm }) => {
                setTimeout(() => {
                  resetForm();
                }, 1000 * 2);
                resetForm();
                swal("Completed", "success", "success");
                console.log(values);
              }}
            >
              {({ errors, touched }) => (
                <Form className="theme-form">
                  <FormGroup>
                    <Row>
                      <Col sm={12} md={6} className="md-fgrup-margin">
                        <Field className="form-control" type="text" name="fullname" placeholder="your name" />
                        {errors.fullname && touched.fullname ? <Label className="text-danger">{errors.fullname}</Label> : null}
                      </Col>
                      <Col sm={12} md={6}>
                        <Field className="form-control" type="number" name="phone" placeholder="phone" />
                        {errors.phone && touched.phone ? <Label className="text-danger">{errors.phone}</Label> : null}
                      </Col>
                    </Row>
                  </FormGroup>
                  <FormGroup>
                    <Field className="form-control" type="email" name="email" placeholder="email address" />
                    {errors.email && touched.email ? <Label className="text-danger">{errors.email}</Label> : null}
                  </FormGroup>
                  <FormGroup>
                    <Field className="form-control" type="textarea" name="message" placeholder="message" />
                    {errors.message && touched.message ? <Label className="text-danger">{errors.message}</Label> : null}
                  </FormGroup>
                  <div className="form-button">
                    <Button className="btn-custom theme-color" type={"submit"}>
                      send
                    </Button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </Col>
      <Col lg={4} className="d-medium-none-lg">
        <div className="contact-right">
          <img className="img-fluid" src="../assets/images/Contact-info.png" alt="" />
        </div>
      </Col>
    </Row>
  );
};

export default ContactForm;
