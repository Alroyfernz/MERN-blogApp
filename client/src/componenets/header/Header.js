import React from "react";
import "./header.scss";
const Header = () => {
  return (
    <div className="header">
      <div className="header_Titles">
        <span className="header_Titles_Small"> React & Node</span>
        <span className="header_Titles_Large">Blog</span>
      </div>
      <img className="header_Image" src="assets/post/3.jpeg" alt="img" />
    </div>
  );
};

export default Header;
