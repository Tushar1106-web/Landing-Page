import HomeDecor from "../Components/HomeSection/HomeDecor";
import HomeContain from "../Components/HomeSection/HomeContain";

const HomeSection = () => {
  return (
    <section className="home" id="home">
     <HomeDecor/>
      <HomeContain/>
    </section>
  );
};

export default HomeSection;
