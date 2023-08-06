import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
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
        <Link href="/" aria-label="CIMUN Home">
          <Image height={32} width={32} alt="" src="/cimun-logo.png" />
        </Link>
      </LogoWrapper>
      {/* Desktop Nav */}
      <nav aria-label="Main">
        <ListContainer>
          <ListItem>
            <Link href="/" passHref legacyBehavior>
              <Anchor>Home</Anchor>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="/about" passHref legacyBehavior>
              <Anchor>About</Anchor>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="/committees" passHref legacyBehavior>
              <Anchor>Committees & Cabinets</Anchor>
            </Link>
          </ListItem>
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
          <ListItem>
            <Link href="/staff-app" passHref legacyBehavior>
              <Anchor>Staff CIMUN XX</Anchor>
            </Link>
          </ListItem>
        </ListContainer>
      </nav>
      {/* Mobile Nav */}
      {burgerOpen && (
        <nav aria-label="Main">
          <BurgerListContainer>
            <LogoWrapper>
              <BurgerLogo src="/White_CIMUN_Logo.png" />
            </LogoWrapper>
            <BurgerListItem>
              <Link href="/" passHref legacyBehavior>
                <Anchor>Home</Anchor>
              </Link>
            </BurgerListItem>
            <BurgerSeparator />
            <BurgerListItem>
              <Link href="/about" passHref legacyBehavior>
                <Anchor>About</Anchor>
              </Link>
            </BurgerListItem>
            <BurgerSeparator />
            <BurgerListItem>
              <Link href="/committees" passHref legacyBehavior>
                <Anchor>Committees & Cabinets</Anchor>
              </Link>
            </BurgerListItem>
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
              <Anchor
                href="https://forms.gle/pRseknBXa8EzTmuD9"
                target="_blank"
              >
                Leahy Fellowship
              </Anchor>
            </BurgerListItem>
            <BurgerSeparator />
            <BurgerListItem>
              <Link href="/staff-app" passHref legacyBehavior>
                <Anchor>STAFF CIMUN XX</Anchor>
              </Link>
            </BurgerListItem>
          </BurgerListContainer>
        </nav>
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
