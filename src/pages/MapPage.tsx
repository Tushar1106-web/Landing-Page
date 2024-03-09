import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import { DataMap } from "../Data/MapData";

const MapPage = () => {
  return (
    <section className="p-0">
      <Container fluid>
        <div className="bottom-section">
          <Row>
            <Col md={6} className="p-0">
              <div className="address-bar">
                <div>
                  <ul className="footer-style">
                    {DataMap.map((item, i) => {
                      return (
                        <li>
                          <div className="footer-icon">
                            <img src={item.imgURL} alt="locate" />
                          </div>
                          <div className="footer-address">
                            <Link to={"#javascript"} className="text-decoration-none">{item.address}</Link>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </Col>
            <Col md={6} className="p-0">
              <iframe className="md-height" src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d35391.48685150366!2d72.77537852898678!3d21.18930639680146!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1530610361925" title="map"></iframe>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default MapPage;
