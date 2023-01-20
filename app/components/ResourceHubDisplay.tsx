import React from "react";
import { SubTitle, Body } from "../../styles/typography";
import { PillButton, PillButtonRow } from "./elements";
import Link from "next/link";
import { colors } from "../../styles/colors";

const CommitteeDisplay = () => {
  return (
    <>
      <SubTitle size="3rem" self="center" align="center" line={1.5} margins="0">
        Documents & Information
      </SubTitle>
      <PillButtonRow>
        <Link href="CIMUN XIX - Delegate Guide.pdf">
          <PillButton selectedColor={colors.indigo}>Delegate Guide</PillButton>
        </Link>
        <Link href="CIMUN XIX - IPD Delegate Guide.pdf">
          <PillButton selectedColor={colors.indigo}>
            IPD Delegate Guide
          </PillButton>
        </Link>
        <Link href="CIMUN XIX - Guide to Crisis.pdf">
          <PillButton selectedColor={colors.indigo}>
            Delegate Guide to Crisis
          </PillButton>
        </Link>
      </PillButtonRow>
      <Body align="center" self="center" weight={500}>
        To access your <strong>Background Guides</strong> and see more
        information on this year's Committees and Cabinets, please visit our
        "Committees & Cabinets" page below!
        <br />
        <br />
      </Body>
      <PillButtonRow>
        <Link href="/committees">
          <PillButton selectedColor={colors.plum}>
            <br />
            CIMUN XIX Committees & Cabinets
            <br />
            <br />
          </PillButton>
        </Link>
      </PillButtonRow>
      <SubTitle size="3rem" self="center" align="center" line={1.5} margins="0">
        <hr />
        Position Paper Submission
      </SubTitle>
      <Body align="left" self="center" weight={500}>
        Ready to submit your position papers? Click on the button below to
        access our submission form.
        <br />
        <br />
        As with any CIMUN conference, all delegates representing countries in
        general committees (General Assemblies, Regional Bodies, etc.) are
        required to submit both a white and a black paper for each topic. 
        All delegates in cabinet committees are required to only
        submit a black paper for each topic.
        <br />
        <br />
        For more information on Position Papers, check out our{" "}
        <strong>
          <Link href="CIMUN XIX - Delegate Guide.pdf">Delegate Guide</Link>
        </strong>{" "}
        (pg. 14)!
        <br />
        <br />
        <strong>
          Position Papers are due by February 1st at 11:59 PM CST.
        </strong>
        <br />
        <br />
      </Body>
      <PillButtonRow>
        <Link href="https://forms.gle/FwfBNTbxQdootZ7o7">
          <PillButton selectedColor={colors.carolinaBlue}>
            <br />
            Submit Your Position Papers!
            <br />
            <br />
          </PillButton>
        </Link>
      </PillButtonRow>
    </>
  );
};

export default CommitteeDisplay;
