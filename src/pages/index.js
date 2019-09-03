import React from "react"

import Layout from "../components/layout"
import avatar from "../images/avatar.jpg"
import styled from "styled-components"

const Avatar = styled.div`
  width: 200px;
  height: 200px;
  margin-top: 3rem;
  border-radius: 100%;
  background-size: cover;
  background-image: url(${avatar});
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
`
const Info = styled.h1`
  font-size: 1.6rem;
`

export default () => (
  <Layout>
    <Avatar src={avatar} />
    <Info>Rafael G. Cavalcanti</Info>
    <p>Desenvolvedor Full-Stack.</p>
  </Layout>
)
