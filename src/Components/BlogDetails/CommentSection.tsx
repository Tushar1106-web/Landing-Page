import { DetailData } from "../../Data/BlogdetailData";
import { Link } from "react-router-dom";

const CommentSection = () => {
  return (
    <div className="reply-comment">
      {Array.from({ length: 3 }).map((_, i) => {
        return (
          <div className="media d-flex" key={i}>
            <img className="align-self-top me-3" src="../assets/images/blog/blog-comment.jpg" alt="blog" />
            <div className="media-body">
              <h4 className="mt-0">
                <Link to={"#javascript"} className="text-decoration-none text-black">
                  {DetailData.title}
                </Link>
              </h4>

              <p>{DetailData.Comment}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default CommentSection;
