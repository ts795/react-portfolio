import React from "react";
import Navigation from "./Navigation";
import "./header.css"

function Header() {
  return (
    <div id="name-and-nav-links">
      <h1 className="header-name">
          Sam Lingampalli
      </h1>
      <Navigation />
    </div>
  );
}

export default Header;