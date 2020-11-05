import React from "react";
import "./Header.css";
import { ArrowForward } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <label className="header__label">Supplier Interface</label>
      </Link>

      <Link to="/add" className="header__nav">
        <IconButton>
          <label fontSize="large">Add a new supplier</label>
          <ArrowForward className="header__icon" fontSize="large" />
        </IconButton>
      </Link>
    </div>
  );
};

export default Header;
