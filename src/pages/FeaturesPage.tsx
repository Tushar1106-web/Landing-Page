import { Container } from "reactstrap";
import FeaturesContain from "../Components/FeturesPage/FeaturesContain";

const FeaturesPage = () => {
  return (
    <div>
      <section className="feature" id="feature">
        <div className="feature-decor">
          <div className="feature-circle1">
            <img src="../assets/images/feature2.png" alt="" />
          </div>
        </div>
        <Container>
          <FeaturesContain />
        </Container>
      </section>
    </div>
  );
};

export default FeaturesPage;
