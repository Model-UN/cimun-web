import React from 'react';
import Head from 'next/head';
import { Wrapper } from '_app/styles/containers';
import Globs from '_constants/globs';
import HeaderNav from '_components/headerNav';
import Jumbotron from '../app/components/jumbotron';
import InfoColumns from '../app/components/infoColumns';
import Footer from '../app/components/footer';

const Home = () => (
  <Wrapper>
    <Head>
      <title>{Globs.SITE.TITLE}</title>
      <meta
        name="description"
        content={Globs.SITE.DESCRIPTION}
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <HeaderNav />
    <Jumbotron
      titleOne="CIMUN"
      titleTwo="XVIII"
      subTitle="THE 18TH ANNUAL CHICAGO INTERNATIONAL MODEL UNITED NATIONS CONFERENCE"
      height={86}
    />
    <InfoColumns />
    <Footer />
  </Wrapper>
);

export default Home;
