import React from "react";
import { Col, Row } from "reactstrap";
import { Link } from "react-router-dom";
import { SideBlogList } from "../../Data/BlogdetailData";

const BlogsideDetail = () => {
    return (
        <Col md={8} lg={9} className="blog-sec">
            <Row className="blog-list">
                {Array.from({ length: 6 }).map((item, i) => {
                    return (
                        <Col md={6} key={i}>
                            <div className="blog-item">
                                <div className="blog-block">
                                    <div className="blog-box">
                                        <div className="overflow-hidden">
                                            <Link to={"#javascript"}>
                                                <img className="img-fluid" src="../assets/images/blog/blog3.jpg" alt="blog" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="blog-text">
                                    <Link to={"#javascript"} className="text-decoration-none">
                                        <h3>{SideBlogList.title}</h3>
                                        <p>{SideBlogList.Comment}</p>
                                    </Link>
                                    <h5>Mark jkcno</h5>
                                </div>
                            </div>
                        </Col>
                    );
                })}
            </Row>
        </Col>
    );
}

export default BlogsideDetail;
