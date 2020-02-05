import React, { useState } from "react";
import opneMenuIcon from "../../images/menu-icon.png";
import closeMenuIcon from "../../images/menu-close.png";
import instragramIcon from "../../images/instagram.png";
import vkIcon from "../../images/vk.png";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

export const NavBar = props => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar color="faded" dark>
        <NavbarBrand href="/" className="mr-auto">
          LOGO
        </NavbarBrand>
        <Nav className="mr-4">
          <NavItem>
            <NavLink className="nav-item_text text-white m-2" href="/">
              8 499 999 99 99
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className="p-0 m-2"
              href="https://github.com/reactstrap/reactstrap"
            >
              <img src={instragramIcon} alt="instagram" />
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className="p-0 m-2"
              href="https://github.com/reactstrap/reactstrap"
            >
              <img src={vkIcon} alt="vk" />
            </NavLink>
          </NavItem>
        </Nav>
        <NavbarToggler
          style={{ outline: "none" }}
          onClick={toggleNavbar}
          className="mr-2 border-0 "
        >
          <img src={collapsed ? opneMenuIcon : closeMenuIcon} alt="menu icon" />
        </NavbarToggler>
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                GitHub
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};
