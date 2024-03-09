import { Swiper, SwiperSlide } from "swiper/react";
import { Blog, BlogBreakpoints } from "../../Data/BlogData";
import { Col, Row } from "reactstrap";
import { Link } from "react-router-dom";

const BlogSlider = () => {
    return (
        <Row>
            <Col sm={12}>
                <h2 className="title">
                    latest <span>blog</span>
                </h2>
            </Col>
            <Col sm={12}>
                <Swiper
                    slidesPerView={2}
                    spaceBetween={30}
                    autoplay={{
                        delay: 3000,
                    }}
                    loop={true}
                    grabCursor={true}
                    breakpoints={BlogBreakpoints}
                >
                    {Blog.map((item, i) => {
                        return (
                            <SwiperSlide key={i}>
                                <div className="blog-item">
                                    <div className="blog-block">
                                        <div className="blog-box">
                                            <div className="overflow-hidden">
                                                <Link to={"#javascript"}>
                                                    <img src={item.imgUrl} alt="" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="blog-text">
                                        <h6>{item.Date}</h6>
                                        <Link to={"#javascript"} className="text-decoration-none">
                                            <h3>{item.title}</h3>
                                        </Link>
                                        <h5>{item.comment}</h5>
                                    </div>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </Col>
        </Row>
    );
}
export default BlogSlider;
