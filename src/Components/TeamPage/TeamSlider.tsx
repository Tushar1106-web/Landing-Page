import { Col, Row } from "reactstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Swiper, SwiperSlide } from "swiper/react";
import { Team, TeamBreakpoints } from "../../Data/TeamData";

const TeamSlider = () => {
  return (
    <Row>
      <Col sm={12}>
        <h2 className="title">
          our <span>smart team</span>
        </h2>
      </Col>
      <Col sm={12}>
        <div>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            autoplay={{
              delay: 3000,
            }}
            loop={true}
            grabCursor={true}
            pagination={{
              clickable: true,
              enabled: true,
            }}
            breakpoints={TeamBreakpoints}
          >
            {Team.map((item, i) => {
              return (
                <SwiperSlide>
                  <div className="team-item">
                    <div className="team-block">
                      <div className="team-box">
                        <div className="team-avtar">
                          <img src={item.imgURL} alt="" className="d-block"/>
                        </div>
                        <div className="team-text">
                          <h3>{item.name}</h3>
                          <h6>{item.post}</h6>
                        </div>
                        <div className="overlay">
                          <ul className="team-social">
                            {item.overlay.map((data, index) => {
                              return (
                                <li key={index}>
                                  <Link to={"#javascript"}>
                                    <FontAwesomeIcon icon={data} color="black" />;
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </Col>
    </Row>
  );
};
export default TeamSlider;
