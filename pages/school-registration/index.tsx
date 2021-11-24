import React from 'react';
import Head from 'next/head';
import { Wrapper } from '_app/styles/containers';
import HeaderNav from '../../app/components/headerNav';
import Jumbotron from '../../app/components/jumbotron';
import Footer from '../../app/components/footer';
import SteppedForm from '../../app/components/stepped-form';

const SchoolRegistration = () => (
  <Wrapper>
    <Head>
      <title>Register Your School | CIMUN XVIII</title>
      <meta
        name="description"
        content="Register your school for CIMUN XVIII!"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <HeaderNav />
    <Jumbotron
      titleOne="SCHOOL"
      titleTwo="REGISTRATION"
      height={65}
      bgImage="cimun-staff.png"
    />
    <SteppedForm confId="1" formId="2" />
    <Footer />
  </Wrapper>
);

export default SchoolRegistration;
