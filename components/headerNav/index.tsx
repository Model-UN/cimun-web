import React, { useState } from "react";
import { ComponentWrapper } from "../../styles/containers";
import { colors } from "../../styles/colors";
import { breakpoints } from "../../styles/breakpoints";
import Link from "next/link";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HeaderWrapper = styled(ComponentWrapper)`
  height: 3.9375vw;
  min-height: 45px;
  max-height: 7vh;
  margin: 0;
  padding: 10px 3rem;
  ${breakpoints("padding", "", [{ 768: "8px 3vw" }])}
  flex-direction: row;
  justify-content: space-between;
  background-color: ${colors.indigo};
`;

const ListContainer = styled.ul`
  display: flex;
  height: 100%;
  flex-direction: row;
  justify-content: flex-end;
  list-style-type: none;
  margin: 0;
  padding: 0;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const BurgerListContainer = styled.ul`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${colors.plum};
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  list-style-type: none;
  margin: 0;
  padding: 2vh;
`;

const ListItem = styled.li<{ highlighted?: boolean }>`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  background-color: ${(props) =>
    props.highlighted ? colors.ivory : "transparent"};
  border-radius: 50px;

  &:hover {
    cursor: pointer;
  }
`;

const BurgerListItem = styled.li`
  display: flex;
  height: 5vh;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;

  &:hover {
    background-color: ${colors.fadedPrimaryBlue};
    cursor: pointer;
  }
`;

const BurgerSeparator = styled.hr`
  display: flex;
  size: 1px;
  width: 70%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
`;

const Anchor = styled.a<{ highlighted?: boolean }>`
  display: flex;
  color: ${(props) => (props.highlighted ? colors.indigo : colors.ivory)};
  text-align: center;
  padding: 0 20px;
  ${breakpoints("padding", "", [
    { 1200: "0 16px" },
    { 800: "0 14px" },
    { 600: "0 12px" },
    { 450: "0 10px" },
  ])};

  font-size: 1.2rem;
  ${breakpoints("font-size", "", [
    { 1200: "1.1rem" },
    { 800: "1rem" },
    { 600: "0.9rem" },
    { 450: "0.9rem" },
  ])};

  text-decoration: none;
  @media screen and (max-width: 768px) {
    color: white;
  }
`;

const LogoWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;

  ${breakpoints("width", "", [{ 768: "100%" }])}
`;

const Logo = styled.img`
  height: 100%;
  object-fit: contain;
  left: 3vw;

  &:hover {
    cursor: pointer;
  }
`;

const BurgerLogo = styled.img`
  height: 40px;
  ${breakpoints("height", "px", [{ 550: 35, 300: 30 }])};
  object-fit: contain;
  display: flex;
`;

const Burger = styled.button`
  display: none;
  @media screen and (max-width: 768px) {
    height: 2.8125vw;
    ${breakpoints("height", "px", [{ 550: 35 }, { 300: 30 }])};
    display: flex;
    position: absolute;
    right: 3vw;
    z-index: 10;
    align-items: center;
    justify-content: center;
    background: none;
    border: none;
  }

  &:hover {
    cursor: pointer;
  }
`;

const Icon = styled(FontAwesomeIcon)<{
  color?: string;
}>`
  font-size: 25px;
  height: 2vw;
  ${breakpoints("height", "px", [{ 1200: 35 }, { 800: 30 }])};
  color: ${(props) => (props.color ? props.color : colors.fadedltGray)};
`;

const HeaderNav = () => {
  const [burgerOpen, setBurgerOpen] = useState(false);

  return (
    <HeaderWrapper width="100%">
      <LogoWrapper>
        <Link href="/">
          <Logo src="/White_CIMUN_Logo.png" />
        </Link>
      </LogoWrapper>
      <ListContainer>
        <Link href="/">
          <ListItem>
            <Anchor>Home</Anchor>
          </ListItem>
        </Link>
        <Link href="/about">
          <ListItem>
            <Anchor>About</Anchor>
          </ListItem>
        </Link>
        <Link href="/staff-apps">
          <ListItem>
            <Anchor>Staff Application</Anchor>
          </ListItem>
        </Link>
        <Link href="/school-registration">
          <ListItem highlighted>
            <Anchor highlighted>Register for CIMUN!</Anchor>
          </ListItem>
        </Link>
        {/*<Link href="DelegateGuide.pdf">*/}
        {/*  <ListItem>*/}
        {/*    <Anchor>Delegate Guide</Anchor>*/}
        {/*  </ListItem>*/}
        {/*</Link>*/}
      </ListContainer>
      {burgerOpen && (
        <BurgerListContainer>
          <LogoWrapper>
            <BurgerLogo src="/White_CIMUN_Logo.png" />
          </LogoWrapper>
          <Link href="/">
            <BurgerListItem>
              <Anchor>Home</Anchor>
            </BurgerListItem>
          </Link>
          <BurgerSeparator />
          <Link href="/about">
            <BurgerListItem>
              <Anchor>About</Anchor>
            </BurgerListItem>
          </Link>
          <BurgerSeparator />
          <Link href="/staff-apps">
            <BurgerListItem>
              <Anchor>Staff Application</Anchor>
            </BurgerListItem>
          </Link>
          <BurgerSeparator />
          <Link href="/school-registration">
            <BurgerListItem>
              <Anchor>School Registration</Anchor>
            </BurgerListItem>
          </Link>
          {/*<Link href="/DelegateGuide.pdf">*/}
          {/*  <BurgerListItem>*/}
          {/*    <Anchor>Delegate Guide</Anchor>*/}
          {/*  </BurgerListItem>*/}
          {/*</Link>*/}
        </BurgerListContainer>
      )}
      <Burger onClick={() => setBurgerOpen(!burgerOpen)}>
        {!burgerOpen ? (
          <Icon icon={"bars"} />
        ) : (
          <Icon icon={"times"} color="white" />
        )}
      </Burger>
    </HeaderWrapper>
  );
};

export default HeaderNav;
export { Anchor };
