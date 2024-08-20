import React, { useState } from "react";
import retryImage from "./image.png"; // Ensure this path is correct
import dotsImage from "./dots.png"; // Ensure this path is correct
import NavbarAddWidgetForm from './NavbarAddWidgetForm'; // Ensure this path is correct
import "./Navbar.css";

const Navbar = ({ categoryList }) => {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <div className="navbar">
      <h3 className="dashboard_text">Dashboard</h3>
      <div className="icons">
        <button className="add-widget" >+ Add Widget</button>
        <button className="icon-button">
          <img src={retryImage} alt="Retry" className="retry" />
        </button>
        <button className="icon-button">
          <img src={dotsImage} alt="Dots" className="dots" />
        </button>
        <button className="timer"><b>Last 2 Days</b></button>
      </div>

      {/* Include the NavbarAddWidgetForm component */}
      <NavbarAddWidgetForm
        showModal={showModal}
        handleClose={handleClose}
        categoryList={categoryList} // Pass the list of categories
      />
    </div>
  );
};

export default Navbar;
