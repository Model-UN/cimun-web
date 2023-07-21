import React, { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  HeaderWrapper,
  ListContainer,
  BurgerListContainer,
  ListItem,
  BurgerListItem,
  BurgerSeparator,
  Anchor,
  LogoWrapper,
  Logo,
  BurgerLogo,
  Burger,
} from "./headerNav.styles";

const HeaderNav = () => {
  const [burgerOpen, setBurgerOpen] = useState(false);

  return (
    <HeaderWrapper>
      <LogoWrapper>
        <Link href="/" legacyBehavior>
          <Logo src="/cimun-logo.png" />
        </Link>
      </LogoWrapper>
      <ListContainer>
        <Link href="/" legacyBehavior>
          <ListItem>
            <Anchor>Home</Anchor>
          </ListItem>
        </Link>
        <Link href="/about" legacyBehavior>
          <ListItem>
            <Anchor>About</Anchor>
          </ListItem>
        </Link>
        <Link href="/committees" legacyBehavior>
          <ListItem>
            <Anchor>Committees & Cabinets</Anchor>
          </ListItem>
        </Link>
        {/* <Link href="/resources">
          <ListItem>
            <Anchor>Delegate Resources</Anchor>
          </ListItem>
        </Link> */}
        {/* <Link href="https://press.cimun.org/">
          <ListItem>
            <Anchor>The CIMUN Chronicle</Anchor>
          </ListItem>
        </Link> */}
        <ListItem>
          <Anchor href="https://forms.gle/pRseknBXa8EzTmuD9" target="_blank">
            Leahy Fellowship
          </Anchor>
        </ListItem>
        <Link href="/staff-app" legacyBehavior>
          <ListItem>
            <Anchor>Staff CIMUN XX</Anchor>
          </ListItem>
        </Link>
      </ListContainer>
      {burgerOpen && (
        <BurgerListContainer>
          <LogoWrapper>
            <BurgerLogo src="/White_CIMUN_Logo.png" />
          </LogoWrapper>
          <Link href="/" legacyBehavior>
            <BurgerListItem>
              <Anchor>Home</Anchor>
            </BurgerListItem>
          </Link>
          <BurgerSeparator />
          <Link href="/about" legacyBehavior>
            <BurgerListItem>
              <Anchor>About</Anchor>
            </BurgerListItem>
          </Link>
          <BurgerSeparator />
          <Link href="/committees" legacyBehavior>
            <BurgerListItem>
              <Anchor>Committees & Cabinets</Anchor>
            </BurgerListItem>
          </Link>
          <BurgerSeparator />
          {/* <Link href="/resources"> */}
          {/*  <BurgerListItem> */}
          {/*    <Anchor>Delegate Resources</Anchor> */}
          {/*  </BurgerListItem> */}
          {/* </Link> */}
          {/* <BurgerSeparator /> */}
          {/* <Link href="https://press.cimun.org/"> */}
          {/*  <BurgerListItem> */}
          {/*    <Anchor>The CIMUN Chronicle</Anchor> */}
          {/*  </BurgerListItem> */}
          {/* </Link> */}
          <BurgerListItem>
            <Anchor href="https://forms.gle/pRseknBXa8EzTmuD9" target="_blank">
              Leahy Fellowship
            </Anchor>
          </BurgerListItem>
          <BurgerSeparator />
          <Link href="/staff-app" legacyBehavior>
            <BurgerListItem>
              <Anchor>STAFF CIMUN XX</Anchor>
            </BurgerListItem>
          </Link>
        </BurgerListContainer>
      )}
      <Burger onClick={() => setBurgerOpen(!burgerOpen)}>
        {!burgerOpen ? (
          <FontAwesomeIcon icon="bars" />
        ) : (
          <FontAwesomeIcon icon="times" color="white" />
        )}
      </Burger>
    </HeaderWrapper>
  );
};

export default HeaderNav;
export { Anchor };
