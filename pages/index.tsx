import Head from "next/head";
import HeaderNav from "../components/headerNav";
import Jumbotron from "../components/jumbotron";
import InfoColumns from "../components/infoColumns";
import Footer from "../components/footer";
import { Wrapper, ComponentWrapper } from "../styles/containers";
import Letter from "../components/articles/letter";
import Announce from "../components/Announce";
import React from "react";
import {CardContainer} from "../components/infoColumns/infoColumns.styles";
import {colors} from "../styles/colors";
import {Body, SubTitle} from "../styles/typography";
import Link from "next/link";

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
        titleOne="CIMUN"
        titleTwo="XIX"
        subTitle="THE 19TH ANNUAL CHICAGO INTERNATIONAL MODEL UNITED NATIONS CONFERENCE"
        height={85}
      />
      <InfoColumns />
      <ComponentWrapper margins={"auto"} pad={"0rem 6rem 0rem 6rem"}>
        <Link href={"/scholarships/kiera-king"}>
          <CardContainer
              margins="0 0 0 0"
              color={colors.plum}
              radius="8px"
          >
            <Body
                align="start"
                self="start"
                margins="0 0 0.25rem 0"
                size="2rem"
                weight={900}
                deco="underline"
                color={colors.ivory}
            >
              Scholarship Opportunity for Delegates
            </Body>
            <SubTitle
                size="2.5rem"
                width="80%"
                mobSize="1.5rem"
                margins="10px 0"
                self="start"
                align="start"
                line={0.9}
                color={colors.ivory}
            >
              Apply for the Kiera King Delegate Award!
            </SubTitle>
            <Body
                align="start"
                self="start"
                margins="0.25rem"
                size="1.5rem"
                weight={400}
                color={colors.ivory}
            >
              The Kiera King Delegate Award is a delegate scholarship in the
              memory of Kiera King, a dedicated Model UN delegate and former
              member of Adlai E. Stevenson Model United Nations. This award aims
              to recognize delegates with similar experiences so that they might
              continue their competitive and professional legacies with an
              acknowledgement of those who did not receive the same
              opportunities. The winner of the award will receive $500 to
              support their education or career after completing their high
              school education.
              <br/><br/>
              <strong><u>For more information, click here.</u></strong>
            </Body>
          </CardContainer>
        </Link>
      </ComponentWrapper>
      <ComponentWrapper margins={"auto"} pad={"0 12rem 0 12rem"}>
        <Letter />
      </ComponentWrapper>
      <Footer />
    </Wrapper>
  );
}
