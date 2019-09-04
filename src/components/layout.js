import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Header = styled.header``

const Content = styled.main`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  padding: 3.6rem;
`
const NavBar = styled.nav`
  width: 100%;
  display: flex;
  padding: 16px;
  justify-content: space-around;
`

const StyledLink = styled(Link)`
  font-size: 1.6rem;
  font-weight: bold;
  text-decoration: none;
  background: none;
  color: #3299BB;
`

const Layout = ({ children }) => {
  return (
    <>
      <Header>
        <NavBar>
          <StyledLink>HOME</StyledLink>
          <StyledLink>SOBRE</StyledLink>
          <StyledLink>CONTATO</StyledLink>
        </NavBar>
      </Header>
      <Content>{children}</Content>
    </>
  )
}

export default Layout
