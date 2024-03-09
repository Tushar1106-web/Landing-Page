import ScrenShotDecor from "../Components/ScreenshotPage/ScrenShotDecor";
import { Container } from "react-bootstrap";
import ScreenShotSlider from "../Components/ScreenshotPage/ScreenShotSlider";

const ScreenshotPage = () => {
  return (
    <section className="screenshot padding-top-bottom" id="screenshot">
      <ScrenShotDecor />
      <Container>
          <ScreenShotSlider/>
      </Container>
    </section>
  );
};

export default ScreenshotPage;
