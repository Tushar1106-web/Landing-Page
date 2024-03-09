import React from "react";
import { Link } from "react-router-dom";
import { Col, Pagination, PaginationItem } from "reactstrap";


const PaginationBlock = () => {
  return (
    <Col md={12}>
      <nav className="blog-pagination">
        <Pagination className="d-flex justify-content-center blog-pagin">
          <PaginationItem>
            <Link className="page-link" to={'#Javascript'} aria-label="Previous">
              <i className="fa fa-angle-left" aria-hidden="true"></i>
            </Link>
          </PaginationItem>
          <PaginationItem active>
            <Link className="page-link" to={'#Javascript'}>
              1
            </Link>
          </PaginationItem>
          <PaginationItem  >
            <Link className="page-link" to={'#Javascript'}>
              2
            </Link>
          </PaginationItem>
          <PaginationItem>
            <Link className="page-link" to={'#Javascript'}>
              3
            </Link>
          </PaginationItem>
          <PaginationItem>
            <Link className="page-link" to={'#Javascript'} aria-label="Next">
              <i className="fa fa-angle-right" aria-hidden="true"></i>
            </Link>
          </PaginationItem>
        </Pagination>
      </nav>
    </Col>
  );
};

export default PaginationBlock;
