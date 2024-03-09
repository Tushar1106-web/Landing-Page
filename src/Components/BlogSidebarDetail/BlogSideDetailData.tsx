import React from "react";
import { Col, Row } from "reactstrap";
import DetailSection from "../BlogDetails/DetailSection";
import CommentSection from "../BlogDetails/CommentSection";
import LeaveComment from "../BlogDetails/LeaveComment";

const BlogSideDetailData = () => {
  return (
    <Row>
      <Col sm={12}>
        <DetailSection />
        <div className="blog-divider"></div>
        <CommentSection />
        <div className="blog-divider"></div>
        <LeaveComment />
      </Col>
    </Row>
  );
};

export default BlogSideDetailData;
