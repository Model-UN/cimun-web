import React from "react";
import Head from "next/head";
import HeaderNav from "../../../components/headerNav";
import Jumbotron from "../../../components/jumbotron";
import Footer from "../../../components/footer";
import SteppedForm from "../../../components/stepped-form";
import { ComponentWrapper, Wrapper } from "../../../styles/containers";
import Announce from "../../../components/Announce";
import KieraKingAwardDetails from "../../../components/articles/kiera-king";

const KieraKingApp = () => {
  return (
    <Wrapper>
      <Head>
        <title>
          Kiera King Delegate Award - Chicago International Model UN
        </title>
        <meta name="description" content="" />
        <meta name="robots" content="noindex" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </Head>
      <HeaderNav />
      <Jumbotron
        titleOne=""
        titleTwo="THE KIERA KING AWARD"
        height={90}
        image="committee-session.jpg"
      />
      <SteppedForm
        formId="633a015c2950494488e2b262"
        submissionType="scholarship form"
      />
      <Footer />
    </Wrapper>
  );
};

export default KieraKingApp;
