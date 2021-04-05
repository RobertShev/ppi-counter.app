import { faKiwiBird } from "@fortawesome/free-solid-svg-icons";
import FontIcon from "../FontIcon";
import React from "react";

const Navbar: React.FC = () => (
  <nav className="navbar is-fixed-top has-shadow is-spaced">
    <div className="navbar-brand">
      <div className="navbar-item">
        <FontIcon icon={faKiwiBird} />
        <span className="has-text-weight-bold" style={{ marginLeft: "0.5em" }}>
          My App
        </span>
      </div>
    </div>
  </nav>
);

export default Navbar;
