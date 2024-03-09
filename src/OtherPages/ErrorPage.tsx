import React from "react";
import { Link } from "react-router-dom";
import { Col } from "reactstrap";
import InnerPageDecor from "../Components/OtherPageCommon/InnerPageDecor";

const ErrorPage = () => {
  return (
    <div className="authentication-form not-found">
       <InnerPageDecor/>
      <div className="text-center">
        <h2 className="error-font">
          4<span>0</span>4
        </h2>
        <h2 className="f-bold">Not found</h2>
        <Col md={8} sm={12} className="offset-md-2">
          <h3>The page you are attempting to reach is currently not available. This may be because the page does not exist or has been moved.</h3>
        </Col>
        <div className="mt-5">
          <Link to={'/layout'} className="text-decoration-none btn-custom theme-color theme-color pt-2 pb-2">
            BACK TO HOME PAGE
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
