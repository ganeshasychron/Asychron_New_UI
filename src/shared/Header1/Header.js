import React, { Component } from "react";
import styled from "styled-components";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import "./Header.css";
import bell from '../../assets/images/Group 7.png';
import downarrow from "../../assets/images/right-arrow.png";
import profile from '../../assets/images/profile-image.jpeg';

export default class Header extends Component {
  render() {
    return (
      <div className="asy-main-header-navbar">
        <nav className="navbar navbar-expand-lg navbar-light bg-light asy-main-header">
          <a className="navbar-brand asy-header-logo-lext" href="#">
            Asychron
          </a>
        </nav>
        <div className="header-second-half">
          <nav className="navbar navbar-expand-lg navbar-light bg-light asy-main-header d-flex justify-content-end">
            <div className="notification-bell-icon-main">
              <img
                className="asy-notification-bell-icon"
                src={bell}
                alt="notification bell-icon asychron"
              />
            </div>

            <div className=" nav-item dropdown">
              <img
                src={profile}
                alt="user-profile asychron"
                class=" rounded-circle"
              ></img>
            </div>
            <div className="header-user-name-text">
              <NavDropdown
                id="nav-dropdown-dark-example"
                title="Gaurav"
                menuVariant="dark"
                className="user-profile-text-header"
              >
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}
