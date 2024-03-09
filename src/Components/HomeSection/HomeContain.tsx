import { Link } from "react-router-dom"
import { Col, Container, Row } from "reactstrap"

const HomeContain = () => {
  return (
    <Container>
        <Row>
          <Col md={5}>
            <div className="home-contain">
              <div>
                <img className="caption-img" src="../assets/images/logoimage.png" alt="caption-img" />
                <h4>Landing page for</h4>
                <h1>
                  t<span className="f-bold">o</span>v<span className="f-bold">o</span>
                  <span className="f-bold f-color">app</span>
                </h1>
                <p>Enhance your business ideas with Powerful, Responsive, Elegant TOVO Theme.</p>
                <Link to={"#javascript"}>
                  <img className="store" src="../assets/images/appstore.png" alt="appstore" />
                </Link>
                <Link to={"#javascript"}>
                  <img className="ml-10 store" src="../assets/images/play-store.png" alt="play-store" />
                </Link>
              </div>
            </div>
          </Col>
          <Col sm={6} className="offset-md-1">
            <div className="home-right">
              <img className="img-fluid" src="../assets/images/mobile.png" alt="mobile" />
            </div>
          </Col>
        </Row>
      </Container>
  )
}

export default HomeContain
