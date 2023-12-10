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
            Staff Interest Form
          </Body>
          <Body
            align="start"
            self="start"
            margins="0 0 0.25rem 0"
            size="2rem"
            styling="italic"
            weight={900}
            color={colors.ivory}
          >
             <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSd8bVQf7UIEnS3bvKv7t9td3I5xBn0vNZq0Gi3BlfS81BnndA/viewform"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click Here
            </a>
          </Body>
          {/* TODO: Update Schedule */}
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
            Join us December 7th - December 10th, 2023 at...
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
            Fairmont Chicago Millenium Park
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
            200 N Columbus Dr, Chicago, Illinois
          </Body>
        </CardContainer>
      </CardWrapper>
    </InfoColumnWrapper>
  );
}
