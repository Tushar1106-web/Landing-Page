import { Container } from "reactstrap";
import AboutDecor from "../Components/AboutPage/AboutDecor";
import AboutContain from "../Components/AboutPage/AboutContain";

const AboutPage = () => {
  return (
    <section className="about" id="about">
      <AboutDecor />
      <Container>
        <AboutContain />
      </Container>
    </section>
  );
};

export default AboutPage;
