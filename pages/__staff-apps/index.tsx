import React from "react";
import Head from "next/head";
import HeaderNav from "../../components/headerNav";
import Jumbotron from "../../components/jumbotron";
import Footer from "../../components/footer";
import SteppedForm from "../../components/stepped-form";
import { Wrapper } from "../../styles/containers";
import Announce from "../../components/Announce";

const StaffApps = () => {
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
      <Announce.BackgroundGuides />
      <HeaderNav />
      <Jumbotron titleOne="STAFF APPLICATION" />
      <SteppedForm
        formId="62cba0f20000000000dc31fb"
        submissionType="application"
      />
      <Footer />
    </Wrapper>
  );
};

export default StaffApps;
