import React, { useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { breakpoints } from '_app/styles/breakpoints';
import { ComponentWrapper } from '_app/styles/containers';
import colors from '../../styles/colors';

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
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const BurgerListContainer = styled.ul`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${colors.primaryBlue};
  height: 32vh;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  transition: all 0.2s;

  &:hover {
    background-color: ${colors.fadedPrimaryBlue};
    cursor: pointer;
  }
`;
const BurgerListItem = styled.li`
  display: flex;
  height: 7vh;
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
const Anchor = styled.a`
  display: flex;
  color: ${colors.primaryBlue};
  text-align: center;
  padding: 0 20px;
  ${breakpoints('padding', '', [
    { 1200: '0 16px' },
    { 800: '0 14px' },
    { 600: '0 12px' },
    { 450: '0 10px' },
  ])};
  font-size: 1rem;
  text-decoration: none;
  @media screen and (max-width: 768px) {
    color: white;
  }
`;
const Logo = styled.img`
  height: 2.8125vw;
  margin-top: 0.46875vw;
  ${breakpoints('height', 'px', [{ 1200: 35 }, { 800: 30 }])};
  ${breakpoints('margin-top', 'px', [{ 1200: 5 }, { 800: 7.5 }])};
  object-fit: contain;
  display: flex;
  position: absolute;
  top: 0;
  left: 3vw;
  /* z-index: 10; */

  &:hover {
    cursor: pointer;
  }
`;
const Burger = styled.button`
  display: none;
  @media screen and (max-width: 768px) {
    height: 2.8125vw;
    margin-top: 0.46875vw;
    ${breakpoints('height', 'px', [{ 1200: 35 }, { 800: 30 }])};
    ${breakpoints('margin-top', 'px', [{ 1200: 5 }, { 800: 7.5 }])};
    display: flex;
    position: absolute;
    top: 0;
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
  font-size: 24px;
  height: 2vw;
  ${breakpoints('height', 'px', [{ 1200: 35 }, { 800: 30 }])};
  color: ${(props) => (props.color ? props.color : colors.dkGray)};
`;

const HeaderNav = () => {
  const [burgerOpen, setBurgerOpen] = useState(false);

  return (
    <HeaderWrapper>
      <div
        style={{
          justifySelf: 'flex-start',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Link href="/">
          <a>
            <Logo src="/cimun-logo.png" />
          </a>
        </Link>
      </div>
      <ListContainer>
        <Link href="/" passHref>
          <ListItem>
            <Anchor>Home</Anchor>
          </ListItem>
        </Link>
        <Link href="/staff-apps" passHref>
          <ListItem>
            <Anchor>Staff Applications</Anchor>
          </ListItem>
        </Link>
        <Link href="/school-registration" passHref>
          <ListItem>
            <Anchor>School Registration</Anchor>
          </ListItem>
        </Link>
      </ListContainer>
      {burgerOpen && (
        <BurgerListContainer>
          <Link href="/" passHref>
            <BurgerListItem>
              <Anchor>Home</Anchor>
            </BurgerListItem>
          </Link>
          <BurgerSeparator />
          <Link href="/staff-apps" passHref>
            <BurgerListItem>
              <Anchor>Staff Applications</Anchor>
            </BurgerListItem>
          </Link>
          <BurgerSeparator />
          <Link href="/school-registration" passHref>
            <BurgerListItem>
              <Anchor>School Registration</Anchor>
            </BurgerListItem>
          </Link>
        </BurgerListContainer>
      )}
      <Burger onClick={() => setBurgerOpen(!burgerOpen)}>
        {!burgerOpen ? (
          <Icon icon="bars" />
        ) : (
          <Icon icon="times" color="white" />
        )}
      </Burger>
    </HeaderWrapper>
  );
};

export default HeaderNav;
