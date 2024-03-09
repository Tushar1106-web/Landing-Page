import { useState } from "react";
import { Link } from "react-router-dom";

const ColorPicker = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleColorPicker = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`color-picker ${isOpen ? "end-0" : ""}`}>
      <Link to={"#javascript"} className="handle" onClick={toggleColorPicker}>
        <i className="fa fa-cog"></i>
      </Link>
      <div className="sec-position">
        <div className="settings-header">
          <h3>Select Color:</h3>
        </div>
        <div className="section">
          <div className="colors o-auto">
            <Link to={"#javascript"} className="color-1"></Link>
            <Link to={"#javascript"} className="color-2"></Link>
            <Link to={"#javascript"} className="color-3"></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;
