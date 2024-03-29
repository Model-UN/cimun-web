import React from "react";
import Head from "next/head";
import Jumbotron from "../../components/jumbotron";
import SteppedForm from "../../components/stepped-form";
import { ComponentWrapper, Wrapper } from "../../styles/containers";
import StaffApp from "../../app/components/staff.app";

const DirApps = () => {
  return (
    <Wrapper>
      <Head>
        <title>
          Staff Applications - Chicago International Model United Nations
        </title>
        <meta
          name="description"
          content="Apply to join the CIMUN XX Staff! - December 7-10th, 2023 at the Fairmont Hotel in Downtown Chicago"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </Head>
      <Jumbotron
        titleOne="STAFF"
        titleTwo="APPLICATION"
        height={85}
        image="cimun-staff.png"
      />
      <ComponentWrapper margins="auto" pad="0 16rem 0 16rem">
        <StaffApp />
      </ComponentWrapper>
      {/*       <SteppedForm formId="apply" submissionType="application" /> */}
    </Wrapper>
  );
};

export default DirApps;
