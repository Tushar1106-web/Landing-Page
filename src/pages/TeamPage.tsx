import { Container } from "reactstrap";
import TeamDecor from "../Components/TeamPage/TeamDecor";
import TeamSlider from "../Components/TeamPage/TeamSlider";

const TeamPage = () => {
  return (
    <section className="team" id="team">
      <TeamDecor />
      <Container>
        <TeamSlider />
      </Container>
    </section>
  );
};

export default TeamPage;
