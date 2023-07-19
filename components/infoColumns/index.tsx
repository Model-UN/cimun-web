import React from "react";
import { SubTitle, Body } from "../../styles/typography";
import { colors } from "../../styles/colors";
import {
  InfoColumnWrapper,
  CardWrapper,
  CardContainer,
} from "./infoColumns.styles";

export default function InfoColumns(): JSX.Element {
  return (
    <InfoColumnWrapper margins="0">
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
            $mobSize="2.5rem"
            margins="10px 0"
            self="start"
            align="start"
            line={0.9}
            color={colors.ivory}
          >
            December 7th - December 10th, 2023
          </SubTitle>
          {/* <Body
            align="start"
            self="start"
            margins="0 0 0.25rem 0"
            size="2rem"
            styling="italic"
            weight={900}
            color={colors.ivory}
          >
            Join us as we host in person this year!
          </Body> */}
          {/* <Body
            align="start"
            self="center"
            margins="0 0 0.25rem 0"
            size="1.75rem"
            styling="regular"
            weight={900}
            color={colors.ivory}
          >
            <br />
            <a
              href="CIMUN XIX Schedule.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click here to view our Conference Schedule!
            </a>
          </Body> */}
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
            Join us in 2023 in...
          </Body>
          <SubTitle
            size="3.5rem"
            width="80%"
            $mobSize="2.5rem"
            margins="10px 0"
            self="start"
            align="start"
            line={0.9}
            color={colors.ivory}
          >
            Downtown Chicago
          </SubTitle>
          {/* <Body
            align="start"
            self="start"
            margins="0 0 0.25rem 0"
            size="2rem"
            styling="italic"
            weight={900}
            color={colors.ivory}
          >
            17 E Monroe Street, Chicago, Illinois
          </Body> */}
        </CardContainer>
      </CardWrapper>
    </InfoColumnWrapper>
  );
}
