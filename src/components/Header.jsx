import React from "react";
import logo from "../assets/images/download.jpeg";
import Nav from "./Nav";

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="" style={{ width: "70px" }} />
      <Nav />
    </div>
  );
};

export default Header;
