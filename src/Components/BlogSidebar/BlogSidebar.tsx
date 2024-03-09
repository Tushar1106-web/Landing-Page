import React from "react";
import SideCategory from "./SideCategory";
import SidePopularTag from "./SidePopularTag";
import RecentBlog from "./RecentBlog";

const BlogSidebar = () => {
  return (
    <div className="sidebar">
      <SideCategory/>
      <SidePopularTag/>
      <h4 className="blog-title">Recent Post</h4>
      <div className="blog-divider"></div>
      <RecentBlog/> 
    </div>
  );
};
export default BlogSidebar;
