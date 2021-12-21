import React from "react";
import styled from "styled-components";
import { colors } from "../../styles/colors";
import Footer from "../../components/footer";
import HeaderNav from "../../components/headerNav";
import Jumbotron from "../../components/jumbotron";
import { ComponentWrapper, Wrapper } from "../../styles/containers";
import { Body, SubTitle } from "../../styles/typography";
import Head from "next/head";
import { breakpoints } from "../../styles/breakpoints";

const BoxesContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  ${breakpoints("flex-direction", "", [{ 1000: "column" }])};
  justify-content: space-around;
  align-items: center;
  width: 90%;
`;

const BoxCard = styled.div`
  display: flex;
  background-color: transparent;
  flex-direction: column;
  width: 30%;
  ${breakpoints("width", "", [{ 1000: "100%" }])};
  justify-content: center;
  align-items: center;
  border: 3px solid ${colors.kindaFadedPrimaryBlue};
  margin: 2.5rem 0;
  ${breakpoints("margin", "", [{ 1000: "1rem 0" }])};
  padding: 2.5rem 0;
  ${breakpoints("padding", "", [{ 1000: "1rem 0" }])};
`;

const Conference = () => {
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
      <HeaderNav />
      <Jumbotron
        titleOne="CIMUN"
        titleTwo="DETAILS"
        subTitle="· FEB 3RD - 6TH, 2022 · THE PALMER HOUSE HILTON"
        height={86}
      />
      <ComponentWrapper>
        <hr
          style={{
            border: "none",
            backgroundColor: colors.kindaFadedPrimaryBlue,
            height: 5,
            width: "85%",
            margin: "5rem 0 2.5rem 0",
          }}
        />
        <SubTitle
          align="center"
          width="75%"
          self="center"
          size="2.5rem"
          mobSize="1.75rem"
          margins="0"
        >
          Welcome Back, Delegates & Advisors!
        </SubTitle>
        <Body
          align="center"
          width="75%"
          self="center"
          size="1.75rem"
          margins="2rem 0 0 0"
        >
          For 18 years, CIMUN has been a premier conference for scholastic Model
          United Nations programs. This coming year, we welcome you - delegates,
          faculty, sponsors, and all others - in-person, to the 18th Chicago
          International Model United Nations conference. We hope you can make
          it!
        </Body>
        <hr
          style={{
            border: "none",
            backgroundColor: colors.kindaFadedPrimaryBlue,
            height: 5,
            width: "85%",
            margin: "2.5rem 0 2.5rem 0",
          }}
        />
        <SubTitle
          align="center"
          width="75%"
          self="center"
          size="2.5rem"
          mobSize="1.75rem"
          margins="2.5rem 0 0 0"
        >
          Pricing Details
        </SubTitle>
        <Body
          align="center"
          width="75%"
          self="center"
          size="1.75rem"
          margins="2rem 0"
        >
          There will be a
          <b>
            <i> one-time </i>
          </b>
          delegation registration fee for each school of
          <b>
            <i> $250</i>
          </b>
          .<br />
          <br />
          Due to the nature of an in-person conference in 2022, we are offering
          a tiered approach to pricing based on number of delegates to a room.
          Schools should select
          <b>
            <i> one </i>
          </b>
          format from the below, and rooms & pricing will be allocated
          accordingly. For any empty spots in a delegate room block, there will
          be an empty bed fee charge.
        </Body>
        <BoxesContainer>
          <BoxCard>
            <SubTitle self="center" align="center" width="75%" margins="1rem">
              Pricing for
              <b>
                <i> FOUR DELEGATES </i>
              </b>
              Per Room
            </SubTitle>
            <SubTitle
              self="center"
              align="center"
              width="75%"
              margins="1rem"
              color={colors.primaryBlue}
            >
              $350 delegate fee
            </SubTitle>
          </BoxCard>
          <Body self="center" size="1.75rem">
            or
          </Body>
          <BoxCard>
            <SubTitle self="center" align="center" width="75%" margins="1rem">
              Pricing for
              <b>
                <i> THREE DELEGATES </i>
              </b>
              Per Room
            </SubTitle>
            <SubTitle
              self="center"
              align="center"
              width="75%"
              margins="1rem"
              color={colors.primaryBlue}
            >
              $370 delegate fee
            </SubTitle>
          </BoxCard>
          <Body self="center" size="1.75rem">
            or
          </Body>
          <BoxCard>
            <SubTitle self="center" align="center" width="75%" margins="1rem">
              Pricing for
              <b>
                <i> TWO DELEGATES </i>
              </b>
              Per Room
            </SubTitle>
            <SubTitle
              self="center"
              align="center"
              width="75%"
              margins="1rem"
              color={colors.primaryBlue}
            >
              $390 delegate fee
            </SubTitle>
          </BoxCard>
        </BoxesContainer>
        <Body
          align="center"
          width="75%"
          self="center"
          size="1.75rem"
          margins="2rem 0 2.5rem 0"
        >
          The Advisor Fee is
          <b>
            <i> $640</i>
          </b>
          . For an additional advisor in a
          <b>
            <i> shared room is $80</i>
          </b>
          .
        </Body>
        <hr
          style={{
            border: "none",
            backgroundColor: colors.kindaFadedPrimaryBlue,
            height: 5,
            width: "85%",
            margin: "2.5rem 0 2.5rem 0",
          }}
        />
        <SubTitle
          align="center"
          width="75%"
          self="center"
          size="2.5rem"
          mobSize="1.75rem"
          margins="0"
        >
          Virtual Option
        </SubTitle>
        <Body
          align="center"
          width="75%"
          self="center"
          size="1.75rem"
          margins="2rem 0 0 0"
        >
          We will also be offering a virtual option for any schools unable to
          attend in person. The Delegate Fee for schools attending virtually is
          <b>
            <i> $50</i>
          </b>
          .
        </Body>
        <hr
          style={{
            border: "none",
            backgroundColor: colors.kindaFadedPrimaryBlue,
            height: 5,
            width: "85%",
            margin: "2.5rem 0 2.5rem 0",
          }}
        />
        <SubTitle
          align="center"
          width="75%"
          self="center"
          size="2.5rem"
          mobSize="1.75rem"
          margins="2.5rem 0 0 0"
        >
          Deadlines & Delegation Fees
        </SubTitle>
        <SubTitle
          self="center"
          align="center"
          width="75%"
          margins="2.5rem 0 1rem 0"
          color={colors.primaryBlue}
        >
          January 6, 2022 is the Delegate Drop Deadline
        </SubTitle>
        <SubTitle self="center" align="center" margins="0" width="75%">
          Fees for dropped delegates cannot be refunded after this date. All
          payments should be completed by this deadline.
        </SubTitle>
      </ComponentWrapper>
      <ComponentWrapper
        margins="2.5rem 0"
        pad="2.5rem 0"
        color={colors.primaryBlue}
      >
        <SubTitle
          align="center"
          width="75%"
          self="center"
          size="2.5rem"
          mobSize="1.75rem"
          margins="2.5rem 0 0 0"
          color="white"
        >
          COVID Policy
        </SubTitle>
        <SubTitle
          color="white"
          self="center"
          align="center"
          margins="2.5rem 0"
          width="75%"
        >
          In an effort to keep delegates, advisors, and staff safe, CIMUN has
          made the decision to issue strict guidance as it relates to COVID-19.
          This means requiring COVID-19 vaccinations for anyone that is eligible
          (over 16 years old) across staff, delegates, and advisors attending
          the conference.
          <br />
          <br />
          We will be flexible and fluid in pivoting our safety guidance as the
          state of COVID-19 changes leading up to the conference to ensure the
          continued well-being for everyone in attendance.
        </SubTitle>
      </ComponentWrapper>
      <Footer />
    </Wrapper>
  );
};
export default Conference;
