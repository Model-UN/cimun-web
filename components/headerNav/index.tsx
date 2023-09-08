import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  HeaderWrapper,
  ListContainer,
  DesktopNav,
  MobileNavContainer,
  ListItem,
  BurgerUnorderedList,
  BurgerListItem,
  Anchor,
  LogoWrapper,
  BurgerLogo,
  Burger,
} from "./headerNav.styles";

const HeaderNav = () => {
  const [burgerOpen, setBurgerOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  // Click outside logic
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setBurgerOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav aria-label="main">
      <HeaderWrapper>
        <LogoWrapper>
          <Link href="/" aria-label="CIMUN Home">
            <Image height={44} width={44} alt="" src="/cimun-logo.png" />
          </Link>
        </LogoWrapper>
        {/* Desktop Nav */}
        <DesktopNav aria-label="Main">
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
              <Link href="/school-registration" passHref legacyBehavior>
                <Anchor>Register</Anchor>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="/staff-app" passHref legacyBehavior>
                <Anchor>Staff CIMUN XX</Anchor>
              </Link>
            </ListItem>
          </ListContainer>
        </DesktopNav>

        <Burger
          onClick={() => setBurgerOpen(true)}
          id="burger"
          aria-label="open menu"
          aria-haspopup="true"
          aria-expanded={burgerOpen ? "true" : "false"}
          aria-controls="mobile-nav"
        >
          <FontAwesomeIcon icon="bars" color="black" />
        </Burger>
        {/* Mobile Nav */}
        {burgerOpen && (
          <MobileNavContainer
            ref={dropdownRef}
            id="mobile-nav"
            role="menu"
            aria-labelledby="burger"
          >
            <HeaderWrapper>
              <LogoWrapper>
                <BurgerLogo src="/White_CIMUN_Logo.png" alt="" />
              </LogoWrapper>
              <Burger
                autoFocus
                onClick={() => setBurgerOpen(false)}
                aria-label="close menu"
              >
                <FontAwesomeIcon icon="times" color="white" />
              </Burger>
            </HeaderWrapper>
            <BurgerUnorderedList>
              <BurgerListItem>
                <Link href="/" passHref legacyBehavior>
                  <Anchor onClick={() => setBurgerOpen(false)}>Home</Anchor>
                </Link>
              </BurgerListItem>
              <BurgerListItem>
                <Link href="/about" passHref legacyBehavior>
                  <Anchor onClick={() => setBurgerOpen(false)}>About</Anchor>
                </Link>
              </BurgerListItem>
              <BurgerListItem>
                <Link href="/committees" passHref legacyBehavior>
                  <Anchor onClick={() => setBurgerOpen(false)}>
                    Committees & Cabinets
                  </Anchor>
                </Link>
              </BurgerListItem>
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
                <Link href="/school-registration" passHref legacyBehavior>
                  <Anchor onClick={() => setBurgerOpen(false)}>Register</Anchor>
                </Link>
              </BurgerListItem>
              <BurgerListItem>
                <Link href="/staff-app" passHref legacyBehavior>
                  <Anchor onClick={() => setBurgerOpen(false)}>
                    STAFF CIMUN XX
                  </Anchor>
                </Link>
              </BurgerListItem>
            </BurgerUnorderedList>
          </MobileNavContainer>
        )}
      </HeaderWrapper>
    </nav>
  );
};

export default HeaderNav;
export { Anchor };
