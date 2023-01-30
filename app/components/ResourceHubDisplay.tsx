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
        <Link href="CIMUN XIX Schedule.pdf">
          <PillButton selectedColor={colors.carolinaBlue}>
            <br />
            Conference Schedule
            <br />
            <br />
          </PillButton>
        </Link>
      </PillButtonRow>
      <PillButtonRow>
        <Link href="CIMUN XIX - Delegate Guide.pdf">
          <PillButton selectedColor={colors.indigo}>
            <br />
            Delegate Guide
            <br />
            <br />
          </PillButton>
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
        A <em>White paper</em> acts as an open statement of a government's policy 
        (similar to a press release) and should be about 1 page in length for 
        each topic, whereas a <em>Black paper</em> is a confidential, internal document 
        for delegates to state their strategic interests for a particular topic
        and should be a half page in length for each topic.
        <br />
        <br />
        Committees should write both a White paper and a Black paper. <strong>If a Committee
        lists more than two topics, delegates only need to choose two to write about</strong>.
        Cabinets only need to write a Black paper; if a Cabinet doesn't list specific
        topics, they should plan to write one paper about what they think is most 
        important from their background guide.
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
