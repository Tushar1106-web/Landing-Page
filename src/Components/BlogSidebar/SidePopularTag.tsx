import React from "react";
import { Link } from "react-router-dom";
import { TagData } from "../../Data/BlogSideBarData";

const SidePopularTag = () => {
  return (
    <div className="sidebar-space">
      <h4 className="blog-title">Popular Tag</h4>
      <div className="blog-divider"></div>
      <div className="tags marg-20">
        {TagData.map((item, i) => {
          return (
            <Link to={"#javascript"} key={i}>
              <span className="badge badge-theme">{item}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
export default SidePopularTag;
