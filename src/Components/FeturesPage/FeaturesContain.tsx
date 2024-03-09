import React from "react";
import { Features } from "../../Data/FeaturesData";
import { Col, Row } from "reactstrap";

const FeaturesContain = () => {
  return (
    <Row>
      <div className="feature-phone">
        <img className="img-fluid" src="../assets/images/222.png" alt="" />
      </div>
      <Col lg={8} className="offset-lg-4">
        <div className="row">
          <div className="col-sm-12 mrgn-md-top">
            <h2 className="title">
              features of<span> tovo</span>
            </h2>
          </div>
          {Features.map((item, i) => {
            return (
              <Col xs={12} md={6} className={`sm-m-top ${item.ColClass}`}>
                <ul className="feature-style">
                  {item.LI?.map((data, i) => {
                    return (
                      <li>
                        <div className="feature-icon">
                          <img src={data.Image} alt="icon" />
                        </div>
                        <div className="feature-subtitle">
                          <h3>{data.Title}</h3>
                        </div>
                        <div>
                          <p>{data.Para}</p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </Col>
            );
          })}
        </div>
      </Col>
    </Row>
  );
};

export default FeaturesContain;
