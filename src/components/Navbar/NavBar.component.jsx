import React, { useState } from 'react';
import logo from '../../images/logo.png';
import opneMenuIcon from '../../images/menu-open.svg';
import closeMenuIcon from '../../images/menu-close.svg';
import instragramIcon from '../../images/instagram.png';
import vkIcon from '../../images/vk.png';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import './NavBar.style.scss';
export const NavBar = props => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div className='mb-5'>
      <Navbar color='faded' dark>
        <NavbarBrand href='/' className='mr-auto'>
          <img src={logo} alt='logo' />
        </NavbarBrand>
        <Nav className='mr-4'>
          <NavItem className='m-2'>
            <NavLink className=' text-white p-0 pt-1 nav-item_text' href='/'>
              8 499 999 99 99
            </NavLink>
          </NavItem>
          <NavItem className='m-2'>
            <NavLink
              className='p-0'
              href='https://github.com/reactstrap/reactstrap'
            >
              <img src={instragramIcon} alt='instagram' />
            </NavLink>
          </NavItem>
          <NavItem className='m-2'>
            <NavLink
              className='p-0'
              href='https://github.com/reactstrap/reactstrap'
            >
              <img src={vkIcon} alt='vk' />
            </NavLink>
          </NavItem>
        </Nav>
        <NavbarToggler
          style={{ outline: 'none' }}
          onClick={toggleNavbar}
          className='mr-2 border-0 '
        >
          <img src={collapsed ? opneMenuIcon : closeMenuIcon} alt='menu icon' />
        </NavbarToggler>
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href='/components/'>Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='https://github.com/reactstrap/reactstrap'>
                GitHub
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};
