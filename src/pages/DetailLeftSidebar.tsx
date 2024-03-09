import { Col, Container, Row } from "reactstrap";
import BlogSidebar from "../Components/BlogSidebar/BlogSidebar";
import BlogSideDetailData from "../Components/BlogSidebarDetail/BlogSideDetailData";

const DetailLeftSidebar = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col md={4} lg={3} className="order-md-first list-sidebar">
            <BlogSidebar />
          </Col>
          <Col md={8} lg={9} className="blog-sec">
            <BlogSideDetailData/>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default DetailLeftSidebar;
