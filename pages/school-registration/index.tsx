import React from "react";
import Head from "next/head";
import HeaderNav from "../../components/headerNav";
import Jumbotron from "../../components/jumbotron";
import Footer from "../../components/footer";
import SteppedForm from "../../components/stepped-form";
import { Wrapper } from "../../styles/containers";
import Announce from "../../components/Announce";

const DirApps = () => {
  return (
    <Wrapper>
      <Head>
        <title>School Registration - Chicago International Model UN</title>
        <meta
          name="description"
          content="Advisors, register your school's Model UN delegation for the 19th annual Chicago International Model United Nations conference! - February 2nd - 5th, 2023 at the Palmer House Hilton Chicago"
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
        titleOne="Registration"
        subTitle="THE 19TH ANNUAL CHICAGO INTERNATIONAL MODEL UNITED NATIONS CONFERENCE"
      />
      <SteppedForm
        formId="630fddb24c48e8cc088824ca"
        submissionType="registration form"
      />
      <Footer />
    </Wrapper>
  );
};

export default DirApps;
