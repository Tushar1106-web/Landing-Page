import AboutPage from "../pages/AboutPage";
import BlogPage from "../pages/BlogPage";
import ContactPage from "../pages/ContactPage";
import FeaturesPage from "../pages/FeaturesPage";
import HomeSection from "../pages/HomeSection";
import MapPage from "../pages/MapPage";
import PricePage from "../pages/PricePage";
import ScreenshotPage from "../pages/ScreenshotPage";
import SubscribePage from "../pages/SubscribePage";
import TeamPage from "../pages/TeamPage";
import TestimonialPage from "../pages/TestimonialPage";
import Header from "./Header/Header";
import AngleDoubleUpIcon from "../pages/AngleDoubleUpIcon";
import Footer from "./Footer/Footer";
import ColorPicker from "../pages/Colorpicker";

const Layout = () => {
  return (
    <div>
      <Header />
      <HomeSection />
      <AboutPage />
      <FeaturesPage />
      <ScreenshotPage />
      <TeamPage />
      <BlogPage />
      <PricePage />
      <TestimonialPage />
      <ContactPage />
      <SubscribePage />
      <MapPage />
      <AngleDoubleUpIcon/>
      <ColorPicker/>
      <Footer/>
    </div>
  );
};

export default Layout;
