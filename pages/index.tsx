import Head from "next/head";
import React from "react";
import Jumbotron from "../components/jumbotron";
import InfoColumns from "../components/infoColumns";
import { Wrapper } from "../styles/containers";
import Letter from "../components/articles/letter";
import AwardAnnouncementCard from "../components/elements/KieraKingCard.elements";

export default function Home() {
  return (
    <Wrapper>
      <Head>
        <title>Chicago International Model United Nations</title>
        <meta
          name="description"
          content="The premier independently organized scholastic Model UN conference. Join us for CIMUN XX - December 7th-10th, 2023 at the Fairmont Hotel in Downtown Chicago!"
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
      <InfoColumns />
      <AwardAnnouncementCard />
      <Letter />
    </Wrapper>
  );
}
