import React from "react";
import { Col, Container, Row } from "reactstrap";
import BlogSidebar from "../Components/BlogSidebar/BlogSidebar";
import BlogSideDetailData from "../Components/BlogSidebarDetail/BlogSideDetailData";

const DetailRightSidebar = () => {
  return (
    <section>
    <Container>
      <Row>
        <Col md={8} lg={9} className="blog-sec">
          <BlogSideDetailData />
        </Col>
        <Col md={4} lg={3} className="order-md-last list-sidebar">
          <BlogSidebar />
        </Col>
      </Row>
    </Container>
    </section>
  );
};

export default DetailRightSidebar;
