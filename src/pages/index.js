import React from "react"
import styled, { keyframes } from "styled-components"
import Layout from "../components/Layout"
import { Link } from "gatsby"

import avatarUrl from "../images/avatar.png"
import Arrow from "../icons/arrow.svg"

const Jumbo = styled.div`
  margin-bottom: 52px;

  h1 {
    font-family: ${props => props.theme.fontPrimary};
    font-size: 4.6rem;
    text-align: center;
    font-weight: ${props => props.theme.fontBlack};
  }
`

const Info = styled.div`
  background-color: ${props => props.theme.yellow};
  height: 100%;
  position: relative;
  padding: 16px;
`
const Avatar = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
`

const Description = styled.p`
  font-size: 1.8rem;
  text-align: right;
`
const ProfileCTA = styled.div`
  position: absolute;
  right: 16px;
  bottom: 16px;
  display: flex;
  flex-flow: column nowrap;

  span {
    text-align: right;
    font-family: ${props => props.theme.fontSecondary};
    margin-bottom: 4px;
  }
`
const Button = styled(Link)`
  background-color: ${props => props.theme.white};
  border-radius: 100%;
  height: 42px;
  width: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 4px;
`

const moveArrow = keyframes`
  0% {
    transform: translate(-2px);
  }

  100% {
    transform: translate(2px);
  }
`

const IconArrow = styled(Arrow)`
  fill: ${props => props.theme.black};
  animation: .8s ${moveArrow} infinite alternate;
`

export default props => {
  return (
    <Layout>
      <Jumbo>
        <h1>RAFAEL CAVALCANTI</h1>
      </Jumbo>
      <Info>
        <Avatar src={avatarUrl} alt="rafael cavalcanti" />
        <Description>
          Sou <br /> Fullstack Developer <br /> localizado no <br /> Rio de
          Janeiro
        </Description>
        <ProfileCTA>
          <span>VIEW</span>
          <span>PROFILE</span>
          <Button to="/about">
            <IconArrow />
          </Button>
        </ProfileCTA>
      </Info>
    </Layout>
  )
}
