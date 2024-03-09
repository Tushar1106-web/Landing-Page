import { Button, Col, Row } from "reactstrap"
import AboutGrid from "./AboutGrid"

const AboutContain = () => {
  return (
    <Row>
          <Col md={5}>
            <div className="about-contain">
              <div>
                <h2 className="title">
                  about the <span>tovo app</span>
                </h2>
                <p className="caption-about">TOVO is dynamic, high-performance and easy to use landing page theme. The theme is developed focusing on the attractive designs and easy customizable features.</p>
                <AboutGrid />
                <div className="top-margin">
                  <Button className="btn-custom theme-color theme-color">
                    view more
                  </Button>
                </div>
              </div>
            </div>
          </Col>
          <Col md={7} className="d-medium-none">
            <div className="about-right">
              <div className="about-phone">
                <img className="img-fluid" src="../assets/images/aboutus.png" alt="aboutus" />
              </div>
            </div>
          </Col>
        </Row>
  )
}

export default AboutContain
