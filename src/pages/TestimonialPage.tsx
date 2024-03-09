import { Col, Container, Row } from "reactstrap";
import TestimonialDecor from "../Components/TestimonialPage/TestimonialDecor";
import { Swiper, SwiperSlide } from "swiper/react";
import { Testimonial } from "../Data/TestimonialData";

const TestimonialPage = () => {
  return (
    <section className="testimonial" id="testimonial">
      <TestimonialDecor />
      <Container>
        <Row>
          <Col lg={10} className="offset-lg-1">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              autoplay={{
                delay: 3000,
              }}
              loop={true}
              grabCursor={true}
            >
              {Testimonial.map((item, i) => {
                return (
                  <SwiperSlide>
                    <div className="testimonial-item">
                      <div className="testimonial-block">
                        <div className="testimonial-avtar">
                          <img src={item.imgURL} alt="" />
                        </div>
                        <div className="testimonial-text">
                          <p>{item.review}</p>
                          <h3>{item.name}</h3>
                          <h6>{item.post}</h6>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TestimonialPage;
