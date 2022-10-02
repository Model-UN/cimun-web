import { SubTitle, Body } from "../../styles/typography";
import { colors } from "../../styles/colors";
import {
  InfoColumnWrapper,
  CardWrapper,
  CardContainer,
} from "./infoColumns.styles";
import React from "react";

export default function InfoColumns(): JSX.Element {
  return (
    <InfoColumnWrapper margins="0 0 0 0">
      <CardWrapper margins="0" direction="column">
        <CardContainer
          margins="0 0.5rem 0 0"
          color={colors.carolinaBlue}
          radius="8px"
        >
          <Body
            align="start"
            self="start"
            margins="0 0 0.25rem 0"
            size="2rem"
            weight={900}
            deco="underline"
            color={colors.ivory}
          >
            Conference Date
          </Body>
          <SubTitle
            size="3.5rem"
            width="80%"
            mobSize="2.5rem"
            margins="10px 0"
            self="start"
            align="start"
            line={0.9}
            color={colors.ivory}
          >
            February 2nd - February 5th, 2023
          </SubTitle>
          <Body
            align="start"
            self="start"
            margins="0 0 0.25rem 0"
            size="2rem"
            styling="italic"
            weight={900}
            color={colors.ivory}
          >
            Join us as we host in person this year!
          </Body>
        </CardContainer>
      </CardWrapper>
      <CardWrapper margins="0" direction="column">
        <CardContainer
          margins="0 0 0 0.5rem"
          flex="1"
          color={colors.indigo}
          radius="8px"
        >
          <Body
            align="start"
            self="start"
            margins="0 0 0.25rem 0"
            size="2rem"
            weight={900}
            deco="underline"
            color={colors.ivory}
          >
            Join us in 2023 at...
          </Body>
          <SubTitle
            size="3.5rem"
            width="80%"
            mobSize="2.5rem"
            margins="10px 0"
            self="start"
            align="start"
            line={0.9}
            color={colors.ivory}
          >
            The Palmer House Hilton Chicago
          </SubTitle>
          <Body
            align="start"
            self="start"
            margins="0 0 0.25rem 0"
            size="2rem"
            styling="italic"
            weight={900}
            color={colors.ivory}
          >
            17 E Monroe Street, Chicago, Illinois
          </Body>
        </CardContainer>
      </CardWrapper>
    </InfoColumnWrapper>
  );
}
