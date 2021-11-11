import React from "react";
import Head from "next/head";
import HeaderNav from "../../app/components/headerNav";
import Jumbotron from "../../app/components/jumbotron";
import Footer from "../../app/components/footer";
import SteppedForm from "../../app/components/stepped-form";
import { Wrapper } from "../../app/styles/containers";

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
      <HeaderNav />
      <Jumbotron
        titleOne="STAFF"
        titleTwo="APPLICATION"
        height={65}
        image="cimun-staff.png"
      />
      <SteppedForm formId="1" confId="1" />
      <Footer />
    </Wrapper>
  );
};

export default StaffApps;
