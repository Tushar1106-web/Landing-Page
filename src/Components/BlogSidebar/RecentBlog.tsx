import React from "react";
import { Link } from "react-router-dom";
import { PostData } from "../../Data/BlogSideBarData";

const RecentBlog = () => {
  return (
    <div className="recent-blog marg-20">
      {PostData.map((item, i) => {
        return (
          <div className="media d-flex" key={i}>
            <img className="me-3" src="../assets/images/blog/1.jpg" alt="blog" />
            <div className="media-body">
              <Link to={"#javascript"} className="text-decoration-none">
                <h5 className="mt-0">{item.title}</h5>
              </Link>
              <p className="m-0">{item.date}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default RecentBlog;
