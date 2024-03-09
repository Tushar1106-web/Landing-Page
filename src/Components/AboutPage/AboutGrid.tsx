import { Col, Row } from "reactstrap";
import { GridAbout } from "../../Data/AboutData";

const AboutGrid = () => {
  return (
    <Row className="sm-mb">
      {GridAbout.map((item, i) => {
        return (
          <Col xl={6} xs={12}>
            <ul className="about-style">
              <li className="abt-hover">
                <div className="about-icon">
                  <div className="icon-hover">
                    <img src={`${item.imgURL}`} alt={item.alt} />
                  </div>
                </div>
                <div className="about-text">
                  <h3>{item.title}</h3>
                </div>
              </li>
            </ul>
          </Col>
        );
      })}
    </Row>
  );
};

export default AboutGrid;
