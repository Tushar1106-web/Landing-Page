import { Link } from "react-router-dom";
import { CategoryData } from "../../Data/BlogSideBarData";

const  SideCategory = () => {
  return (
    <div className="sidebar-space">
      <h4 className="blog-title">blog Category</h4>
      <div className="blog-divider"></div>
      <div className="blog-cat-detail">
        <ul>
          {CategoryData.map((item, i) => {
            return (
              <li className="marg-15" key={i}>
                <Link to={"#javascript"}>
                  <i className="fa fa-angle-right" aria-hidden="true"></i>
                  {item}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
export default SideCategory
