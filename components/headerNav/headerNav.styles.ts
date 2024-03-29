import styled from "styled-components";
import { ComponentWrapper } from "../../styles/containers";
import { colors } from "../../styles/colors";
import { breakpoints } from "../../styles/breakpoints";

export const HeaderWrapper = styled(ComponentWrapper)`
  height: 60px;
  margin: auto;
  flex-direction: row;
  justify-content: space-between;
`;

export const DesktopNav = styled.div`
  display: block;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const ListContainer = styled.ul`
  display: flex;
  height: 100%;
  flex-direction: row;
  justify-content: flex-end;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export const MobileNavContainer = styled.div`
  display: none;
  position: absolute;
  z-index: 10;
  top: 0;
  left: 0;
  background-color: ${colors.primaryBlue};
  width: 100%;
  margin: 0;
  padding: 46px 16px 16px;

  ${breakpoints("display", "", [
  { 768: "block" }
])};
`;

export const ListItem = styled.li`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;

  &:hover {
    background-color: ${colors.fadedPrimaryBlue};
    cursor: pointer;
  }
`;

export const BurgerUnorderedList = styled.ul`
  margin: 0 auto;
  width: 70%;
  padding: 0;
`

export const BurgerListItem = styled.li`
  display: flex;
  height: 5vh;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  border-bottom: 1px solid white;

  &:hover {
    background-color: ${colors.fadedPrimaryBlue};
    cursor: pointer;
  }

  &:last-child {
    border: none;
  }
`;


export const Anchor = styled.a`
  display: flex;
  align-items: center;
  color: ${colors.primaryBlue};
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
  ${breakpoints("color", "", [
  { 768: "white" }
])};
  text-decoration: none;
  svg {
      height: 1rem;
      width: 1rem;
      margin-left: 0.5rem;
  }
`;

export const LogoWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  height: 90%;
  object-fit: contain;
  left: 3vw;

  &:hover {
    cursor: pointer;
  }
`;

export const BurgerLogo = styled.img`
  height: 40px;
  ${breakpoints("height", "px", [{ 550: 35, 300: 30 }])};
  object-fit: contain;
  display: flex;
`;

export const Burger = styled.button`
  display: none;
  @media screen and (max-width: 768px) {
    height: 44px;
    width: 44px;
    display: block;
    z-index: 10;
    background: none;
    border: none;
    padding: 0.375rem;
  }

  &:hover {
    cursor: pointer;
  }

  svg {
    height: 100%;
    width: 100%;
    padding: 0.25rem;
  }
`;