import React from "react";
import { Link } from "react-router-dom";

const DetailSection = () => {
    return (
        <div className="blog-item">
            <div className="blog-block">
                <div className="blog-box">
                    <div className="overflow-hidden">
                        <img className="img-fluid" src="../assets/images/blog/blog-details.jpg" alt="blog" />
                    </div>
                </div>
            </div>
            <div className="blog-text">
                <h6>25 january 2018</h6>
                <Link to={"#javascript"} className="text-decoration-none">
                    <h3 className="blog-head">There are many variations of passages of Lorem Ipsum available, </h3>
                </Link>
                <div className="blog-divider"></div>
                <div className="blog-description">
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                        with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                        with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                    <h5>Mark jkcno</h5>
                    <h5 className="pull-right">
                        10 <i className="fa fa-heart-o"></i>, 50 <i className="fa fa-comments-o"></i>
                    </h5>
                </div>
            </div>
        </div>
    );
}
export default DetailSection;
