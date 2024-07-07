import React from "react";
import { NavLink } from "react-router-dom";

export default function Links() {
  return (
    <nav className="nav_bar">
      <div className="main_link_tabs">
        <div className="links_container">
          <NavLink  excat to="/home" className="link_item" >
            Home
          </NavLink>
          <NavLink to="/skills" className="link_item" >
            Skills
          </NavLink>
        </div>
        <NavLink to="/contact" className="contact_link" >
          Contact Me
        </NavLink>
      </div>
    </nav>
  );
}
