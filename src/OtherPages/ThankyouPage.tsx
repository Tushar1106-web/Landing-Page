import { Link } from 'react-router-dom'
import { Col, Container } from 'reactstrap'
import CopyRight from "../Components/OtherPageCommon/CopyRight";

const ThankyouPage = () => {
  return (
    <div className="full-page">
    <div className="thanks-bg">
      <Container>
        <Col md={12}>
          <div className="thanks-section">
            <div><img className="img-fluid downlod-img" src="../assets/images/thank-you.png" alt=""/>
              <Col lg={8} className="offset-lg-2">
                <h2>Thank You</h2>
              </Col>
              <h3>If it doesn’t start automatically,<Link className="manual-down" to={"#javascript"}>please click here to downlaod manually.</Link></h3>
            </div>
          </div>
        </Col>
      </Container>
    </div>
    <footer className="bg-thanks">
     <CopyRight/>
    </footer>
  </div>
  )
}

export default ThankyouPage