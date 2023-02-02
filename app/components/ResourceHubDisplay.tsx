import React, { useEffect, useState } from "react";
import { SubTitle, Body } from "../../styles/typography";
import { PillButton, PillButtonRow } from "./elements";
import Link from "next/link";
import { colors } from "../../styles/colors";
import PdfViewer from "../../components/pdf";
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
  background-color: "white";
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

  const fetchDelegations = async () => {
    const delegationList = await getCommitteesDelegations();
    setDelegations(delegationList);
  };

  const fetchPositionPaper = async () => {
    const pdfUrl = await getPositionPaper(hashId ?? "");
    setPdfUrl(pdfUrl?.white_paper_s3_url ?? "");
  };

  useEffect(() => {
    fetchDelegations();
  }, []);
  useEffect(() => {
    if (
      selectedCommittee != null &&
      selectedCommittee.length > 0 &&
      selectedDelegations != null &&
      selectedDelegations.length > 0
    ) {
      fetchPositionPaper();
    }
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
      <Body align="center" self="center" weight={700}>
        Follow along with updates from the International Press Delegation and
        CNN
        <br />
        <br />
      </Body>
      <PillButtonRow>
        <Link href=" https://press.cimun.org/">
          <PillButton selectedColor={colors.carolinaBlue}>
            <br />
            The CIMUN Chronicle
            <br />
            <br />
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
        <br />A <em>White paper</em> acts as an open statement of a government's
        policy (similar to a press release) and should be about 1 page in length
        for each topic, whereas a <em>Black paper</em> is a confidential,
        internal document for delegates to state their strategic interests for a
        particular topic and should be a half page in length for each topic.
        <br />
        <br />
        Committees should write both a White paper and a Black paper.{" "}
        <strong>
          If a Committee lists more than two topics, delegates only need to
          choose two to write about
        </strong>
        . Cabinets only need to write a Black paper; if a Cabinet doesn't list
        specific topics, they should plan to write one paper about what they
        think is most important from their background guide.
        <br />
        <br />
        For more information on Position Papers, check out our{" "}
        <strong>
          <Link href="CIMUN XIX - Delegate Guide.pdf">Delegate Guide</Link>
        </strong>{" "}
        (pg. 14)!
        <br />
        <br />
      </Body>
      {delegations != null && Object.keys(delegations).length > 0 ? (
        <Body weight={700}>
          Choose a Committee and then select a delegation to view the correct
          position paper.
        </Body>
      ) : (
        <>
          <Body weight={700}>
            Thank you for taking the time to submit position papers. White
            papers will be available for viewing on the website this afternoon.
            We look forward to seeing you at CIMUN XIX.
          </Body>
          <Body weight={700}>
            If you still need to submit a position paper, you can submit by
            following the link below.
          </Body>
        </>
      )}
      {(delegations == null || Object.keys(delegations).length === 0) && (
        <Link href="https://forms.gle/FwfBNTbxQdootZ7o7">
          <a>
            <Body>
              <u>Late Position Paper Submission</u>
            </Body>
          </a>
        </Link>
      )}
      {delegations != null && Object.keys(delegations).length > 0 && (
        <>
          <SelectSeggsyInput
            onChange={(e) => setSelectedCommittee(e.target.value)}
          >
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
      )}
    </>
  );
};

export default CommitteeDisplay;
