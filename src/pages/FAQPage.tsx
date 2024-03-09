import React, { useState } from "react";
import InnerPageDecor from "../Components/OtherPageCommon/InnerPageDecor";
import { Card, CardBody, CardHeader, Col, Collapse, Container, Row } from "reactstrap";
import { Link } from "react-router-dom";

const FAQPage = () => {
  const [openCollapseIndex, setOpenCollapseIndex] = useState<number | null>(0);

  const toggleCollapse = (index: number | null) => {
    setOpenCollapseIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section>
      <InnerPageDecor/>
      <div className="faq">
        <Container>
          <Row>
            <Col md={12}>
              <div>
              {Array.from({length:4}).map((_, index) => (
                <Card className="border-theme mb-3 radius-0" key={index}>
                  <CardHeader onClick={() => toggleCollapse(index)}>
                    <Link to={'/layout'} className={`text-decoration-none `} >
                      <span style={{color:`${openCollapseIndex === index? "#18e7d3":""}`}}>Collapsible Group Item #{index + 1}<i className="fa fa-angle-down"></i></span>
                    </Link>
                  </CardHeader>
                  <Collapse isOpen={openCollapseIndex === index}>
                    <CardBody>
                      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. 
                    </CardBody>
                  </Collapse>
                </Card>
              ))}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};
export default FAQPage;
