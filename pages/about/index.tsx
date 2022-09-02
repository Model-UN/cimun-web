import { Wrapper, ComponentWrapper } from '../../styles/containers'
import HeaderNav from '../../components/headerNav'
import About from "../../components/articles/about";
import Jumbotron from "../../components/jumbotron";
import React from 'react';
import Footer from "../../components/footer";
import Head from "next/head";
import Announce from "../../components/Announce";

const AboutPage = () => {
  return (
    <Wrapper>
      <Head>
        <title>About CIMUN - Chicago International Model United Nations</title>
        <meta
            name="description"
            content="About the Chicago International Model United Nations"
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
      <ComponentWrapper margins={"0 3.9375vw 0 3.9375vw"} pad={"0 10rem 0 10rem"}>
        <About/>
      </ComponentWrapper>
      <Footer />
    </Wrapper>
  )
}

export default AboutPage;
