import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import CopyRight from "../Components/OtherPageCommon/CopyRight";
import InnerPageDecor from "../Components/OtherPageCommon/InnerPageDecor";

const DownloadPage = () => {
  return (
    <section className="authentication-form download">
     <InnerPageDecor/>
      <Container>
        <Row>
          <Col md={12}>
            <div className="text-center">
              <img className="img-fluid downlod-img" src="../assets/images/down.png" alt="downlod-img" />
              <Col lg={8} className="offset-lg-2">
                <h2>Your download should begin automatically</h2>
              </Col>
              <h3>
                If it doesn’t start automatically,
                <Link className="manual-down" to={"/layout"}>
                  please click here to downlaod manually.
                </Link>
              </h3>
            </div>
          </Col>
        </Row>

        <footer className="bg-light">
          <CopyRight />
        </footer>
      </Container>
    </section>
  );
};

export default DownloadPage;
