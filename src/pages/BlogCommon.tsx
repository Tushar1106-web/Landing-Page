import React from "react";
import Header from "../Layout/Header/Header";
import BreadCrumbCommon from "../Common/BlogHeader/BreadCrumbCommon";
import Footer from "../Layout/Footer/Footer";
import { Outlet } from "react-router-dom";

const BlogCommon = () => {
  
  return (
    <div>
      <Header />
      <BreadCrumbCommon />
            <Outlet/>
      <Footer />
    </div>
  );
};

export default BlogCommon;
