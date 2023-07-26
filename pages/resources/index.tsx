import React from "react";
import Head from "next/head";
import { Wrapper } from "../../styles/containers";
import HeaderNav from "../../components/headerNav";
import { Header, SubTitle, Body } from "../../styles/typography";
import Footer from "../../components/footer";
// import Announce from "../../components/Announce";
import { InformationalWrapper } from "../../app/components/elements";
import ResourceHubDisplay from "../../app/components/ResourceHubDisplay";

const DelegateResourcePage = () => {
  return (
    <Wrapper>
      <Head>
        <title>Delegate Resources - CIMUN XIX</title>
        <meta
          name="description"
          content="Important guides, resources, and links for CIMUN XX Delegates - December 7th-10th, 2023 at the Fairmont Hotel"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </Head>
      <HeaderNav />
      <SubTitle
        size="4rem"
        self="center"
        align="center"
        line={1.2}
        margins="8rem 0 0 0"
      >
        Resources for Delegates
      </SubTitle>
      <Header self="center" margins="0 0 -3rem 0">
        CIMUN XX - December 7th - 10th, 2023
        <hr />
      </Header>
      <InformationalWrapper>
        <Body align="left" self="center" weight={500}>
          Delegates, below you will find resources that will help you be
          successful at CIMUN XX. This page houses our delegate guide, paper
          submission, relevant dates, and many more details to help you prepare
          for CIMUN! With these tools at your fingertips, we could not be more
          excited for you to join us in Chicago from December 7th to December
          10th for an amazing conference!
          <br />
          <br />
        </Body>
        <ResourceHubDisplay />
        <hr />
        <Body align="left" self="center" weight={500}>
          <strong>
            Additional inquiries? Email us at{" "}
            <a href="mailto:sc@cimun.org">sc@cimun.org</a>!
          </strong>
        </Body>
      </InformationalWrapper>
      <Footer />
    </Wrapper>
  );
};

export default DelegateResourcePage;
