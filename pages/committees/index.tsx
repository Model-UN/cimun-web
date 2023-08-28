import React from "react";
import Head from "next/head";
import { Wrapper } from "../../styles/containers";
import Jumbotron from "../../components/jumbotron";
import { Body } from "../../styles/typography";
import { InformationalWrapper } from "../../app/components/elements";
import CommitteeDisplay from "../../app/components/CommitteeDisplay";

const Committees = () => {
  return (
    <Wrapper>
      <Head>
        <title>Committees & Cabinets - CIMUN XX</title>
        <meta
          name="description"
          content="An Overview of the Committees & Cabinets at CIMUN XX - December 7th-10th, 2023"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </Head>
      <Jumbotron
        titleOne="COMMITTEES"
        titleTwo="& CABINETS"
        subTitle="CIMUN XX"
        height={85}
        image="awards.jpg"
        bottomMargin="0.984375vw"
      />
      <InformationalWrapper>
        <Body align="left" self="center" weight={500}>
          As you prepare to join us, the CIMUN team is excited to present the
          committees and cabinets for CIMUN XX! Delegates will soon find
          themselves present in these committees, working with their colleagues
          in committee to help solve global issues and tackle complex real-world
          challenges.
          <br />
          <br />
          As usual, delegates will participate in immersive <em>
            Present-Day
          </em>{" "}
          and <em>Historical</em> committees. This year, CIMUN will feature
          committees and cabinets from the year of <strong>1962</strong>.
          Additionally, delegates may also participate in our unique{" "}
          <strong>press delegations</strong>, where participating delegates
          report on breaking news as events unfold at CIMUN.
          <br />
          <br />
        </Body>
        <CommitteeDisplay />
      </InformationalWrapper>
    </Wrapper>
  );
};

export default Committees;
