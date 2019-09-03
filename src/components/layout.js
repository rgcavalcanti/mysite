import React from "react"
// import { Link } from "gatsby"
import styled from "styled-components"

const Header = styled.header``

const Content = styled.main`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`

const Layout = ({ children }) => {
  return (
    <>
      <Header>
      </Header>
      <Content>{children}</Content>
    </>
  )
}

export default Layout
