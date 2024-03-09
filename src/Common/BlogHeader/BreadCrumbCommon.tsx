import React from "react";
import { Link, useLocation } from "react-router-dom";
import { BreadcrumbItem, Col, Container, Row } from "reactstrap";

const BreadCrumbCommon = () => {
  const { state } = useLocation();

  return (
    <div className="page-margin">
      <div className="breadcrumb-bg">
        <Container>
          <Row className="align-items-center">
            <Col md={6} sm={12} className="col-text-center d-align-center">
              <h2 className="title">
                Blog <span>{state}</span>
              </h2>
            </Col>
            <Col md={6} sm={12} className="col-text-center">
              <nav className="blog-bradcrumb">
                <ol className="breadcrumb bg-transparent mb-0">
                  <BreadcrumbItem>
                    <Link to={"/layout"}>Home</Link>
                  </BreadcrumbItem>
                  <BreadcrumbItem>Blog</BreadcrumbItem>
                  <BreadcrumbItem active>{state}</BreadcrumbItem>
                </ol>
              </nav>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default BreadCrumbCommon;
