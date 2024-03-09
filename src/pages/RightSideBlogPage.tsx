import React from "react";
import { Col, Container, Row } from "reactstrap";
import BlogSideDetail from "../Components/BlogSidebar/BlogSideDetail";
import BlogSidebar from "../Components/BlogSidebar/BlogSidebar";

const RightSideBlogPage = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col md={4} lg={3} className="order-md-last list-sidebar">
            <BlogSidebar />
          </Col>
          <BlogSideDetail />
        </Row>
      </Container>
    </section>
  );
};

export default RightSideBlogPage;
