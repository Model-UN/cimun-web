import React from "react";
import Head from "next/head";
import {Wrapper} from "../../styles/containers";
import HeaderNav from "../../components/headerNav";
import Jumbotron from "../../components/jumbotron";
import {Body} from "../../styles/typography";
import Footer from "../../components/footer";
import Announce from "../../components/Announce";
import {InformationalWrapper} from "../../app/components/elements"
import CommitteeDisplay
  from "../../app/components/CommitteeDisplay";

const Committees = () => {
  return (
      <Wrapper>
        <Head>
          <title>Committees & Cabinets - CIMUN XVIII</title>
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
        <Jumbotron
            titleOne=".....COMMITTEES"
            titleTwo="& CABINETS"
            subTitle="CIMUN XVIII"
            height={75}
            image="awards.jpg"
        />
          <InformationalWrapper>
            <Body
                align="left"
                self="center"
                weight={500}
            >
              As you prepare to join us for CIMUN XVIII, the CIMUN team is excited
              to present the committees and cabinets for 2022! Delegates will soon
              find themselves present in these committees, working with their
              colleagues in committee to help solve global issues and tackle
              complex real-world challenges.
              <br/><br/>
              As usual, delegates will participate in immersive <em>
              Present-Day</em> and Historical committees. This year,
              CIMUN will feature committees and cabinets from the year of <strong>
              1950</strong>. Additionally, delegates may also participate in our
              unique <strong>press delegations</strong>, where participating
              delegates report on breaking news as events unfold at CIMUN.
              <br/><br/>
            </Body>
            <CommitteeDisplay/>
          </InformationalWrapper>
        <Footer />
      </Wrapper>
  );
};

export default Committees;
