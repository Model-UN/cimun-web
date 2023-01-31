import React, { useEffect, useState } from "react";
import { SubTitle, Body } from "../../styles/typography";
import { PillButton, PillButtonRow } from "./elements";
import Link from "next/link";
import { colors } from "../../styles/colors";
import PdfViewer from "../../components/pdfViewer";
import styled from "styled-components";
import {
  getCommitteesDelegations,
  getPositionPaper,
} from "../../services/axiosHandler";
import { fonts } from "../../styles/fonts";
import md5 from "md5";

const SelectSeggsyInput = styled.select`
  width: 100%;
  height: 56px;
  position: relative;
  padding: 4px 16px;
  margin: 8px 0px;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  border: 2px solid ${colors.kindaFadedltGray};
  border-radius: 4px;
  font-family: ${fonts.body}, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
  background-color: ${colors.ivory};
  color: #282828;
  outline-color: ${colors.primaryBlue};
  transition: 0.3s background-color ease-in-out, 0.3s border-color ease-in-out;

  &:hover {
    border-color: ${colors.ltGray};
  }
`;

const CommitteeDisplay = () => {
  const [delegations, setDelegations] = useState<string[]>([]);
  const [selectedCommittee, setSelectedCommittee] = useState<string>("");
  const [selectedDelegations, setSelectedDelegations] = useState<string>("");
  const [pdfUrl, setPdfUrl] = useState<string>("");
  const hashId = md5(`${selectedCommittee}${selectedDelegations}`);
  console.log(hashId);

  console.log("selectedCommittee: ", selectedCommittee);

  useEffect(async () => {
    const delegationList = await getCommitteesDelegations();
    setDelegations(delegationList);
  }, []);
  useEffect(async () => {
    const pdfUrl = await getPositionPaper(hashId);
    setPdfUrl(pdfUrl?.white_paper_s3_url ?? "");
  }, [selectedCommittee, selectedDelegations]);

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
        Position Papers
      </SubTitle>
      <Body align="left" self="center" weight={500}>
        Ready to view your position papers? Select your committee and delegation
        to view the correct position paper.
        <br />
        <br />
        As with any CIMUN conference, all delegates representing countries in
        general committees (General Assemblies, Regional Bodies, etc.) are
        required to submit both a white and a black paper for each topic. All
        delegates in cabinet committees are required to only submit a black
        paper for each topic.
        <br />
        <br />
        For more information on Position Papers, check out our{" "}
        <strong>
          <Link href="CIMUN XIX - Delegate Guide.pdf">Delegate Guide</Link>
        </strong>{" "}
        (pg. 14)!
        <br />
        <br />
        <br />
        <br />
        Choose a Committee and then select a delegation to view the correct
        position paper.
      </Body>
      <SelectSeggsyInput onChange={(e) => setSelectedCommittee(e.target.value)}>
        <option hidden disabled selected>
          {" "}
          -- select a committee --{" "}
        </option>
        {Object.keys(delegations).map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </SelectSeggsyInput>
      {selectedCommittee != null && selectedCommittee.length > 0 && (
        <SelectSeggsyInput
          onChange={(e) => setSelectedDelegations(e.target.value)}
        >
          <option hidden disabled selected>
            {" "}
            -- select a delegation --{" "}
          </option>
          {delegations[selectedCommittee].map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </SelectSeggsyInput>
      )}
      {selectedCommittee != null &&
        selectedCommittee.length > 0 &&
        selectedDelegations != null &&
        selectedDelegations.length > 0 && <PdfViewer url={pdfUrl} />}
    </>
  );
};

export default CommitteeDisplay;
