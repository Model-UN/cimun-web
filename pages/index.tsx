import Head from "next/head";
import HeaderNav from "../components/headerNav";
import Jumbotron from "../components/jumbotron";
import InfoColumns from "../components/infoColumns";
import Footer from "../components/footer";
import { Wrapper } from "../styles/containers";
import Letter from "../components/articles/letter";
import Announce from "../components/Announce";
import React from "react";
import AwardAnnouncementCard from "../components/elements/KieraKingCard.elements";

export default function Home() {
  return (
    <Wrapper>
      <Head>
        <title>Chicago International Model United Nations</title>
        <meta
          name="description"
          content="The premier independently organized scholastic Model UN conference. Join us for CIMUN XIX - February 2nd-5th, 2023 at the Palmer House Hilton Chicago!"
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
      <Announce.ResourceHub />
      <HeaderNav />
      <Jumbotron
        titleOne="CIMUN"
        titleTwo="XIX"
        subTitle="THE 19TH ANNUAL CHICAGO INTERNATIONAL MODEL UNITED NATIONS CONFERENCE"
        height={85}
      />
      <InfoColumns />
      <AwardAnnouncementCard />
      <Letter />
      <Footer />
    </Wrapper>
  );
}
