import { Col, Row } from 'reactstrap'
import { Swiper,SwiperSlide } from 'swiper/react'
import { Breakpoints } from '../../Data/BreakPointData'

const ScreenShotSlider = () => {
  return (
    <Row>
    <Col sm={12}>
      <div className="screenshot-contain">
        <img className="mobile-light-left" src="../assets/images/light.png" alt="light" />
        <img className="mob-mocup img-fluid" src="../assets/images/screenshot-mob.png" alt="screenshot-mob" />
        <img className="mobile-light-right" src="../assets/images/light-right.png" alt="light-right" />
        <Swiper slidesPerView={5} spaceBetween={30} autoplay={{ delay: 3000 }} loop={true} grabCursor={true} breakpoints={Breakpoints}>
          {[...Array(7)].map((e, i) => (
            <SwiperSlide key={i}>
              <div className="screenshot-item">
                <img src="../assets/images/app/12.jpg" alt="app" height={355} width={199} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Col>
  </Row>
  )
}

export default ScreenShotSlider
