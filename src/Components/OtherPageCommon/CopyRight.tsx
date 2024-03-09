import React from 'react'
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';

const CopyRight = () => {
  return (
    <Container>
    <Row>
      <Col md={12}>
        <div className="copyright-section">
          <p>2018-19 Copyright © By Themeforest Powered By Pixel Strap</p>
          <div className="mt-3 text-center"><Link className="text-decoration-none btn-custom theme-color theme-color pt-2 pb-2" to={"/layout"}>BACK TO HOME PAGE</Link></div>
        </div>
      </Col>
    </Row>
  </Container>
  )
}

export default CopyRight