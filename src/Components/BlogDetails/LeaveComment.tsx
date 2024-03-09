import { Field, Form, Formik } from "formik";
import React from "react";
import { Button, Col, FormGroup, Row } from "reactstrap";
import swal from "sweetalert";
import * as Yup from "yup";

const LeaveComment = () => {
  const SignupSchema = Yup.object().shape({
    name: Yup.string().min(2, "Too Short!").max(10, "Too Long!").required("Required"),
    message: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
  });
  return (
    <Row>
      <Col md={10} className="offset-md-1 leave-coment">
        <h3 className="text-center">Leave Your Comment</h3>
        <Formik
          initialValues={{
            name: "",
            message: "",
            email: "",
          }}
          validationSchema={SignupSchema}
          onSubmit={(values, { resetForm }) => {
            resetForm();
            swal("Completed", "success", "success");
            console.log(values);
          }}
        >
          {({ errors, touched }) => (
            <Form className="theme-form footer-form p-0 mt-3">
              <FormGroup>
                <Row>
                  <Col lg={6} md={12} className="md-fgrup-margin">
                    <Field className="form-control" type="text" placeholder="your name" name="name" />
                    {errors.name && touched.name ? <div className="text-danger">{errors.name}</div> : null}
                  </Col>
                  <Col lg={6} md={12}>
                    <Field className="form-control" type="email" placeholder="email address" name="email" />
                    {errors.email && touched.email ? <div className="text-danger">{errors.email}</div> : null}
                  </Col>
                </Row>
              </FormGroup>
              <FormGroup>
                <Field className="form-control" type="textarea" placeholder="message" name="message" />
                {errors.message && touched.message ? <div className="text-danger">{errors.message}</div> : null}
              </FormGroup>
              <div className="form-button">
                <Button className="btn-custom theme-color">send</Button>
              </div>
            </Form>
          )}
        </Formik>
      </Col>
    </Row>
  );
};
export default LeaveComment;
