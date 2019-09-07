import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Nav = styled.nav`
  display: flex;
  padding: 16px 0;
  align-items: baseline;
  justify-content: space-around;
`

const StyledLink = styled(Link)`
  font-family: ${props => props.theme.fontSecondary};
  text-decoration: none;
  color: ${props => props.theme.black};
  font-size: 1.4rem;

  &[aria-current="page"] {
    border-bottom: 1px solid ${props => props.theme.black};
  }
`

const Menu = () => {
  return (
    <Nav>
      <StyledLink to="/">INÍCIO</StyledLink>
      <StyledLink to="/about">
        SOBRE
      </StyledLink>
      <StyledLink to="/blog">BLOG</StyledLink>
      <StyledLink to="/contact">CONTATO</StyledLink>
    </Nav>
  )
}

export default Menu
