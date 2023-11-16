import React from "react";
import Head from "next/head";
import { Wrapper } from "../../styles/containers";
import Jumbotron from "../../components/jumbotron";
import { Body, SubTitle } from "../../styles/typography";
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
        </Body>
        <SubTitle margins="10px 0" align="left" self="center" weight={500}>
          Position Paper Guidelines
        </SubTitle>
        <Body align="left" self="center" weight={500}>
          Position Papers are required for each delegate.
          <br />
          <br />
          For committees, each topic requires a White Paper. This paper outlines
          your delegation's position on the topic. A Black Paper is optional,
          and this outlines your delegation's agenda. The content within the
          Black Paper is confidential and is for the purposes of notifying CIMUN
          staff of your intentions within committee.
          <br />
          <br />
          For cabinets, each topic requires a Black Paper. The content within
          the Black Paper is confidential and is for the purposes of notifying
          CIMUN staff of your intentions within committee.
          <br />
          <br />
          <i>
            White Papers are expected to be 1 page in length, double spaced, and
            Times New Roman Size 12.
          </i>
          <br />
          <br />
          <i>
            Black Papers are expected to be 1/2 page in length, double spaced,
            and Times New Roman Size 12.
          </i>
          <br />
          <br /> Please Include the following header at the beginning of each
          paper:
          <br />
          <br /> Name
          <br /> Delegation
          <br /> School
          <br /> Committee (include year)
          <br /> Topic
          <br />
          <br /> Example:
          <br />
          <br /> John Doe
          <br /> United States of America
          <br /> High School of America
          <br /> United Nations General Assembly 2023
          <br /> Promotion of Beneficial AI
        </Body>
        <Body align="left" weight={500} size="1rem">
          Upload will be available soon.
        </Body>
        <CommitteeDisplay />
      </InformationalWrapper>
    </Wrapper>
  );
};

export default Committees;
