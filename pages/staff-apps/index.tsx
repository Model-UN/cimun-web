import React from 'react';
import Head from 'next/head';
import { Wrapper } from '_app/styles/containers';
import HeaderNav from '../../app/components/headerNav';
import Jumbotron from '../../app/components/jumbotron';
import Footer from '../../app/components/footer';
import SteppedForm from '../../app/components/stepped-form';

const StaffApps = () => (
  <Wrapper>
    <Head>
      <title>Staff Applications | CIMUN XVIII</title>
      <meta
        name="description"
        content="Apply here to join the CIMUN XVIII team!"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <HeaderNav />
    <Jumbotron
      titleOne="STAFF"
      titleTwo="APPLICATION"
      height={65}
      bgImage="cimun-staff.png"
    />
    <SteppedForm formId="1" confId="1" />
    <Footer />
  </Wrapper>
);

export default StaffApps;
