import React from "react";
import { Col, Container, Row } from "reactstrap";
import CommentSection from "../Components/BlogDetails/CommentSection";
import LeaveComment from "../Components/BlogDetails/LeaveComment";
import DetailSection from "../Components/BlogDetails/DetailSection";

const BlogDetail = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col sm={12}>
            <DetailSection />
            <div className="blog-divider"></div>
            <CommentSection />
            <div className="blog-divider"></div>
            <LeaveComment />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BlogDetail;
