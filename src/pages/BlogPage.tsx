import { Container } from "reactstrap";
import AboutDecor from "../Components/AboutPage/AboutDecor";
import BlogSlider from "../Components/BlogPage/BlogSlider";


const BlogPage = () => {
  return (
    <section className="blog position-relative" id="blog">
      <AboutDecor />
      <Container>
        <BlogSlider/>
      </Container>
    </section>
  );
};

export default BlogPage;
