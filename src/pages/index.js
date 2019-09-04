import React from "react"

import Layout from "../components/layout"
import avatar from "../images/avatar.jpg"
import styled from "styled-components"

const Avatar = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 100%;
  background-size: cover;
  background-image: url(${avatar});
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
`
const Title = styled.h1`
  font-size: 2.4rem;
  color: #3299bb;
`

const Subtitle = styled.p`
  font-size: 1.6rem;
  text-align: center;
  color: #424242;
`

export default () => (
  <Layout>
    <Avatar src={avatar} />
    <Title>Rafael G. Cavalcanti</Title>
    <Subtitle>
      Desenvolvedor Full-Stack. Apaixonado por novas tecnologias e amante de
      novos desafios
    </Subtitle>
  </Layout>
)
