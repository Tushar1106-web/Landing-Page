import React from "react";
import InnerPageDecor from "../Components/OtherPageCommon/InnerPageDecor";
import { ReviewData } from "../Data/ReviewData";
import { Col, Container, Row } from "reactstrap";

const ReviewPage = () => {
  return (
    <section>
      <InnerPageDecor />
      <div className="review-block">
        <Container>
          <Row className="margin-bottom">
            {Array.from({ length: 6 }).map((_, i) => {
              return (
                <Col lg={4} md={6} key={i}>
                  <div className="review-box">
                    <img className="img-fluid" src={ReviewData.imgURL} alt="review" />
                    <h5>John Martin</h5>
                    <div className="rating-star">
                      {ReviewData.star.map((data, i) => {
                        return <i className={data} aria-hidden="true"></i>;
                      })}
                    </div>
                    <div className="review-message">
                      <p>{ReviewData.title}</p>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default ReviewPage;
