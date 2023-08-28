import React from "react";
import Head from "next/head";
import { Wrapper, ComponentWrapper } from "../../styles/containers";
import About from "../../components/articles/about";
import Jumbotron from "../../components/jumbotron";
// import Announce from "../../components/Announce";

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
      </Head>
      <Jumbotron
        titleOne="CIMUN"
        titleTwo="XX"
        subTitle="THE 20TH ANNUAL CHICAGO INTERNATIONAL MODEL UNITED NATIONS CONFERENCE"
        height={85}
      />
      <ComponentWrapper margins="0 3.9375vw 0 3.9375vw" pad="0 10rem 0 10rem">
        <About />
      </ComponentWrapper>
    </Wrapper>
  );
};

export default AboutPage;
