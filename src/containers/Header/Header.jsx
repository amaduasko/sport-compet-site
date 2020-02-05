import React from "react";
import styled from "styled-components";
import headerBg from "../../images/header-bg.png";
import { NavBar } from "../../components/Navbar/NavBar.component";

const Container = styled.div`
  background-image: url(${props => props.bg});
  background-size: cover;
`;

const Header = () => {
  return (
    <Container bg={headerBg}>
      <NavBar />
    </Container>
  );
};

export default Header;
