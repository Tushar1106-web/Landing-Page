import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleUp } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

const AngleDoubleUpIcon = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

   useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={`scroll-to-top ${isVisible ? "d-block" : "d-none"} tap-top`}>
      <div onClick={scrollToTop}>
        <FontAwesomeIcon icon={faAngleDoubleUp} />
      </div>
    </div>
  );
};

export default AngleDoubleUpIcon;
