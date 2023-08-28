import React from "react";
import Head from "next/head";
import Jumbotron from "../../components/jumbotron";
import SteppedForm from "../../components/stepped-form";
import { ComponentWrapper, Wrapper } from "../../styles/containers";
// import Announce from "../../components/Announce";
import RegistrationDetails from "../../components/articles/registration-details";

const DirApps = () => {
  return (
    <Wrapper>
      <Head>
        <title>School Registration - Chicago International Model UN</title>
        <meta
          name="description"
          content="Advisors, register your school's Model UN delegation for CIMUN XIX! - February 2nd-5th, 2023 at the Palmer House Hilton Chicago"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </Head>
      <Jumbotron
        titleOne="SCHOOL"
        titleTwo="REGISTRATION"
        height={85}
        image="awards.jpg"
      />
      <ComponentWrapper margins="auto" pad="0 16rem 0 16rem">
        <RegistrationDetails />
      </ComponentWrapper>
      {/* <SteppedForm
        formId="630fddb24c48e8cc088824ca"
        submissionType="registration form"
      /> */}
    </Wrapper>
  );
};

export default DirApps;
