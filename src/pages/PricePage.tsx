import { Col, Container, Row } from "reactstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Price, PriceBreakpoints } from "../Data/PriceData";
import { Link } from "react-router-dom";

const PricePage = () => {
  return (
    <section className="price" id="price">
      <Container>
        <Row>
          <Col sm={12}>
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              autoplay={{
                delay: 3000,
              }}
              loop={true}
              grabCursor={true}
              breakpoints={PriceBreakpoints}
            >
              {Price.map((item, i) => {
                return (
                  <SwiperSlide key={i}>
                    <div className="price-item">
                      <div className="price-block">
                        <div className="price-type">
                          <h2>{item.title}</h2>
                        </div>
                        <div className="mrp">
                          <h6 className="user-type">{item.usertype}</h6>
                          <div className="price-devide"></div>
                          <h2>{item.price}</h2>
                          <h6 className="price-year">{item.year}</h6>
                          <div className="price-devide"></div>
                        </div>
                        <ul className="price-feature">
                            {item.priceFeature.map((data,i) =>{
                                return(
                                    <li key={i}>{data}</li>
                                )
                            })}
                        </ul>
                        <Link className="btn btn-custom theme-color" to={'#javascript'}>
                          Select Plan
                        </Link>
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

export default PricePage;
