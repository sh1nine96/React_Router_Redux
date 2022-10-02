import React from "react";
import { NavLink } from "react-router-dom";
import "./app.css";

const NavigationMenu = () => {
  return (
    <div className="navigation-links">
      <NavLink to="/" activeClassName="active" exact>
        Home
      </NavLink>
      <NavLink to="/contact" activeClassName="active">
        Contact
      </NavLink>
      <NavLink to="/apply" activeClassName="active">
        Apply-now
      </NavLink>
    </div>
  );
};

export default NavigationMenu;
