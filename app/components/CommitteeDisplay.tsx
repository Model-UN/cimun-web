import React, { useState } from "react";
import { CommitteeDetails } from "../shared/constants";
import { colors } from "../../styles/colors";
import { SubTitle, Header, Body } from "../../styles/typography";
import { PillButton, PillButtonRow } from "./elements";
import { CommitteeAbbrToCopy } from "../shared/constants";
import { Committee } from "../types";

const CommitteeDisplay = () => {
  const [timePeriod, setTimePeriod] = useState<string>("PD");
  const [committeeType, setCommitteeType] = useState<string>("COMMS");
  let committees = CommitteeDetails[timePeriod][committeeType].map(
    (committee) => committee.getJSX()
  );

  const handleSelectPeriod = (e) => {
    e.preventDefault();
    setTimePeriod(e.currentTarget.id);
    return null;
  };

  const handleSelectCommitteeType = (e) => {
    e.preventDefault();
    setCommitteeType(e.currentTarget.id);
    return null;
  };

  const ipdCard = new Committee(
    "International Press Delegation",
    "IPD",
    null,
    "cimun-logo.png",
    0,
    [],
    "../CIMUN XIX - IPD Delegate Guide.pdf",
    "The International Press Delegation (IPD) produces The CIMUN Chronicle, a digital newspaper, " +
      "and partners with the CIMUN News Network (CNN), a staff-run broadcast news program.<br/><br/>" +
      "All press coverage during CIMUN is provided by Delegates from the International Press Delegation."
  ).getJSX();

  const asterisk =
    committeeType === "CABS" ? (
      <Body size="1.1rem" line={1.5} self="center" color={colors.plum}>
        *<strong>Note</strong>: Some cabinets will have{" "}
        <em>no official agenda</em>. Cabinets are designed to be fluid,
        interactive, and realistic, offering delegates the unique opportunity to
        drive debate on domestic and international issues in the direction they
        see fit. To best support this dynamic, cabinet background guides will
        provide key information and context that is unconstrained by specific
        topics or agenda items.
      </Body>
    ) : (
      <></>
    );

  // @ts-ignore
  return (
    <>
      <PillButtonRow>
        <PillButtonRow className="timePeriods">
          <PillButton
            id="PD"
            currentSelection={timePeriod}
            onClick={handleSelectPeriod}
          >
            Present-Day
          </PillButton>
          <PillButton
            id="HST"
            currentSelection={timePeriod}
            onClick={handleSelectPeriod}
          >
            Historical
          </PillButton>
        </PillButtonRow>
        <PillButtonRow className="committeeTypes">
          <PillButton
            id="COMMS"
            currentSelection={committeeType}
            selectedColor={colors.plum}
            onClick={handleSelectCommitteeType}
          >
            Committees
          </PillButton>
          <PillButton
            id="CABS"
            currentSelection={committeeType}
            selectedColor={colors.plum}
            onClick={handleSelectCommitteeType}
          >
            Cabinets
          </PillButton>
        </PillButtonRow>
      </PillButtonRow>
      <SubTitle
        size="4rem"
        self="center"
        align="center"
        line={1}
        margins="1rem auto 0 auto"
      >
        {CommitteeAbbrToCopy[timePeriod]} {CommitteeAbbrToCopy[committeeType]}
      </SubTitle>
      <Header size="1.5rem" self="center">
        <em>
          Press coverage provided by Delegates from the International Press
          Delegation (IPD)
        </em>
        <br />
        <hr />
      </Header>
      {asterisk}
      {committees}
      {ipdCard}
    </>
  );
};

export default CommitteeDisplay;
