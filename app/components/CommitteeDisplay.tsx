import React, {MouseEventHandler, SyntheticEvent, useState} from 'react';
import { CommitteeDetails } from '../shared/constants';
import {colors} from "../../styles/colors";
import {SubTitle, Header} from "../../styles/typography";
import {PillButton, PillButtonRow, PillProps} from "./elements";
import {CommitteeAbbrToCopy} from "../shared/constants";

const CommitteeDisplay = () => {
  const [timePeriod, setTimePeriod]= useState<string>("PD")
  const [committeeType, setCommitteeType] = useState<string>("COMMS")
  let committees = CommitteeDetails[timePeriod][committeeType].map(committee => committee.getJSX())

  const handleSelectPeriod = (e) => {
    e.preventDefault()
    setTimePeriod(e.currentTarget.id)
    return null
  }

  const handleSelectCommitteeType = (e) => {
    e.preventDefault()
    setCommitteeType(e.currentTarget.id)
    return null
  }

  // @ts-ignore
  return (
      <>
        <PillButtonRow>
        <PillButtonRow className="timePeriods">
          <PillButton id="PD" currentSelection={timePeriod} onClick={handleSelectPeriod}>Present-Day</PillButton>
          <PillButton id="HST" currentSelection={timePeriod} onClick={handleSelectPeriod}>Historical</PillButton>
        </PillButtonRow>
        <PillButtonRow className="committeeTypes">
          <PillButton id="COMMS" currentSelection={committeeType} selectedColor={colors.plum} onClick={handleSelectCommitteeType}>Committees</PillButton>
          <PillButton id="CABS" currentSelection={committeeType} selectedColor={colors.plum} onClick={handleSelectCommitteeType}>Cabinets</PillButton>
        </PillButtonRow>
        </PillButtonRow>
        <SubTitle size="4rem" self="center" align="center" line={1} margins="1rem auto 0 auto">{CommitteeAbbrToCopy[timePeriod]} {CommitteeAbbrToCopy[committeeType]}</SubTitle>
        <Header size="1.5rem" self="center"><em>Press coverage provided by Delegates from the International Press Delegation (IPD)</em><br/><hr/></Header>
        {committees}
      </>
  )
};

export default CommitteeDisplay;