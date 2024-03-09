import { Container } from "reactstrap";
import ContactDecor from "../Components/ContactPage/ContactDecor";
import ContactForm from "../Components/ContactPage/ContactForm";

const ContactPage = () => {
  return (
    <section className="contact" id="contact us">
      <ContactDecor />
      <Container>
        <ContactForm />
      </Container>
    </section>
  );
};

export default ContactPage;
