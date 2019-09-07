import React from "react"
import styled, { ThemeProvider, createGlobalStyle } from "styled-components"

import Menu from "./Menu"

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Josefin+Sans&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Playfair+Display:400,900&display=swap');

  * {
    margin: 0;
    padding: 0;
    border: 0;
    text-decoration: none;
    font-family: ${props => props.theme.fontPrimary}
  }

  html {
    font-size: 62.5%;
  }

  html, body, #___gatsby {
    height: 100%;
  }

  div[role="group"][tabindex] {
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
  }
`

const defaultTheme = {
  yellow: "#FFC857",
  black: "#393E41",
  white: "#FFFFFF",

  fontPrimary: "'Playfair Display', serif",
  fontSecondary: "'Josefin Sans', sans-serif",
  fontRegular: 400,
  fontBlack: 900,
}

const Content = styled.main`
  display: flex;
  flex-flow: column nowrap;
  flex: 1 auto;
`

const Layout = props => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <>
        <Menu />
        <Content>{props.children}</Content>
        <GlobalStyle />
      </>
    </ThemeProvider>
  )
}

export default Layout
