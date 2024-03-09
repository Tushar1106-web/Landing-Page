import { Col, Container, Row } from "reactstrap";
import { Blog } from "../Data/BlogData";
import { Link } from "react-router-dom";
import PaginationBlock from "../Common/BlogHeader/PaginationBlock";

const BlogList = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col sm={12}>
            <Row className="blog-list">
              {Blog.map((item, i) => {
                return (
                  <Col md={6}>
                    <div className="blog-item">
                      <div className="blog-block">
                        <div className="blog-box">
                          <div className="overflow-hidden">
                            <Link to={"#javascript"}>
                              <img src={item.imgUrl} alt="" />
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="blog-text">
                        <h6>{item.Date}</h6>
                        <Link to={"/blogdetail"} state={"blogdetail"} className="text-decoration-none">
                          <h3>{item.title}</h3>
                        </Link>
                        <h5>{item.comment}</h5>
                      </div>
                    </div>
                  </Col>
                );
              })}
            </Row>
          </Col>
        </Row>
        <PaginationBlock />
      </Container>
    </section>
  );
};

export default BlogList;
