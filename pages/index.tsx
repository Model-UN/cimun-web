import Head from "next/head";
import HeaderNav from "../components/headerNav";
import Jumbotron from "../components/jumbotron";
import InfoColumns from "../components/infoColumns";
import Footer from "../components/footer";
import { Wrapper, ComponentWrapper } from "../styles/containers";
import Letter from "../components/articles/letter";
import Announce from "../components/Announce";
import React from "react";
import styled from "styled-components";
import { breakpoints } from "../styles/breakpoints";
import { fonts } from "../styles/fonts";
import { colors } from "../styles/colors";
import Link from "next/link";

const PoggyButton = styled.div`
  width: 30%;
  ${breakpoints("width", "", [{ 800: "65%" }])};
  ${breakpoints("height", "", [{ 800: "50px" }])};
  ${breakpoints("font-size", "", [{ 800: "16px" }])};
  ${breakpoints("margin", "", [{ 800: "2rem 0 0 0" }])};
  height: 80px;
  align-self: center;
  margin: 5rem 0 0 0;
  padding: 0 16px;
  border: none;
  border-radius: 56px;
  font-family: ${fonts.body}, sans-serif;
  font-size: 30px;
  font-weight: 600;
  line-height: normal;
  background-color: ${colors.ivory};
  color: ${colors.indigo};
  justify-content: center;
  align-items: center;
  display: flex;

  &:hover {
    cursor: pointer;
  }
`;

export default function Home() {
  return (
    <Wrapper>
      <Head>
        <title>Chicago International Model UN</title>
        <meta
          name="description"
          content="Chicago International Model United Nations"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Mulish:wght@900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Alegreya:wght@600&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Alegreya+Sans:wght@500&family=Alegreya:wght@600&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Alegreya+Sans:wght@500&family=Alegreya:wght@600&family=Source+Sans+Pro&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Announce.RegistrationOpen />
      <HeaderNav />
      <Jumbotron
        titleOne="CIMUN XIX"
        subTitle="THE 19TH ANNUAL CHICAGO INTERNATIONAL MODEL UNITED NATIONS CONFERENCE"
      >
        <Link href="/about">
          <PoggyButton>MORE DETAILS</PoggyButton>
        </Link>
      </Jumbotron>
      <InfoColumns />
      <ComponentWrapper margins={"auto"} pad={"0 10rem 0 10rem"}>
        <Letter />
      </ComponentWrapper>
      <Footer />
    </Wrapper>
  );
}
