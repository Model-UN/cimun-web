import { ComponentWrapper } from "../../styles/containers";
import { colors } from "../../styles/colors";
import { breakpoints } from "../../styles/breakpoints";
import Link from "next/link";
import styled from "styled-components";

const HeaderWrapper = styled(ComponentWrapper)`
  height: 3.9375vw;
  min-height: 45px;
  max-height: 7vh;
  width: 94vw;
  margin: auto;
  flex-direction: row;
  justify-content: space-between;
`;
const ListContainer = styled.ul`
  display: flex;
  height: 100%;
  flex-direction: row;
  justify-content: flex-end;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;
const ListItem = styled.li`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${colors.fadedPrimaryBlue};
    cursor: pointer;
  }
`;
const Anchor = styled.a`
  display: flex;
  color: ${colors.primaryBlue};
  text-align: center;
  padding: 0 20px;
  ${breakpoints("padding", "", [
    { 1200: "0 16px" },
    { 800: "0 14px" },
    { 600: "0 12px" },
    { 450: "0 10px" },
  ])};
  font-size: 1rem;
  text-decoration: none;
`;
const Logo = styled.img`
  height: 2.8125vw;
  margin-top: 0.46875vw;
  ${breakpoints("height", "px", [{ 1200: 35 }, { 800: 30 }])};
  ${breakpoints("margin-top", "px", [{ 1200: 5 }, { 800: 7.5 }])};
  object-fit: contain;

  &:hover {
    cursor: pointer;
  }
`;

const HeaderNav = () => {
  return (
    <HeaderWrapper>
      <div
        style={{
          justifySelf: "flex-start",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Link href="/">
          <Logo src="/cimun-logo.png" />
        </Link>
      </div>
      <ListContainer>
        <Link href="/">
          <ListItem>
            <Anchor>Home</Anchor>
          </ListItem>
        </Link>
        <Link href="/staff-apps">
          <ListItem>
            <Anchor>Staff Applications</Anchor>
          </ListItem>
        </Link>
      </ListContainer>
    </HeaderWrapper>
  );
};

export default HeaderNav;

