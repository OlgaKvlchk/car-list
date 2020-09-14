/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./AppHeader.css";
import logo from "../images/logo.svg";
import logout from "../images/logout.svg";

class AppHeader extends React.Component {
  render() {
    return (
      <header className="app-header">
        <div className="header-left">
          <a href="#">
            <img className="header-logo__img" src={logo} alt="Logo" />
            <h4 className="header-logo__text">Logo</h4>
          </a>
        </div>
        <div className="header-right">
          <a href="#" className="header-login-name">
            Username
          </a>
          <a href="#" className="header-logout">
            <img className="header-logout__img" src={logout} alt="Logout" />
          </a>
        </div>
      </header>
    );
  }
}

export default AppHeader;
