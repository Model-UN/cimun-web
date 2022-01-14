import React from "react";
import Head from "next/head";
import HeaderNav from "../../components/headerNav";
import Jumbotron from "../../components/jumbotron";
import Footer from "../../components/footer";
import SteppedForm from "../../components/stepped-form";
import { Wrapper, ComponentWrapper} from "../../styles/containers";
import { SubTitle } from "../../styles/typography";
import {colors} from "../../styles/colors";
import Announce from "../../components/Announce";

const SchoolRegistration = () => {
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
      <Announce.DelegateGuide />
      <HeaderNav />
      <Jumbotron
        titleOne="SCHOOL"
        titleTwo="REGISTRATION"
        subTitle="Register for CIMUN XVIII!"
        height={75}
        image="awards.jpg"
      />
      <ComponentWrapper margins="auto auto -3vw auto">
        <SubTitle
            align="center"
            color={colors.accentRed}
            width="75%"
            self="center"
            weight={500}
        >
          {/*<a*/}
          {/*    href="/registration-information.pdf"*/}
          {/*    target="_blank"*/}
          {/*    rel="noopener noreferrer"*/}
          {/*>*/}
          {/*  <em>*/}
          {/*    Looking for pricing & registration details? <strong><u>Click*/}
          {/*    here</u> to download our registration guide!</strong>*/}
          {/*  </em>*/}
          {/*</a>*/}
        </SubTitle>
      </ComponentWrapper>
      <SteppedForm confId="1" formId="2" submissionType={"registration"} />
      <Footer />
    </Wrapper>
  );
};

export default SchoolRegistration;
