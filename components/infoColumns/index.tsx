import Link from "next/link";
import { SubTitle, Body } from "../../styles/typography";
import { colors } from "../../styles/colors";
import { InfoColumnWrapper, CardWrapper, CardContainer } from "./infoColumns.styles";
import LetterElement from "./letter.element";
import React from "react";

export default function InfoColumns(): JSX.Element {
  return (
      <>
        <InfoColumnWrapper>
          <CardWrapper
              flex="1"
              margins="2rem 15% 0 15%"
              pad="0 0 2rem 0rem"
              direction="row"
          >
            <CardWrapper
              margins="0 0"
              direction="column"
            >
              <CardContainer
                  noMargins
                  color={colors.primaryBlue}
              >
                <Body
                    align="start"
                    self="start"
                    margins="0 0 0.25rem 0"
                    size="2rem"
                    weight={700}
                    color={colors.ltGray}
                >
                  <em><u>Conference Date</u></em>
                </Body>
                <SubTitle
                    size="3.5rem"
                    width="80%"
                    mobSize="2rem"
                    margins="0 0"
                    self="start"
                    align="start"
                    line={0.9}
                    color={colors.ltGray}
                >
                  February 2nd - 5th, 2023
                </SubTitle>
              </CardContainer>
            </CardWrapper>
            <CardWrapper
                margins="0"
                direction="column"
            >
              <CardContainer
                  margins="0 0 1rem 1rem"
                  flex="1"
                  color={colors.accentRed}
              >
                <Body
                    align="start"
                    self="start"
                    margins="0 0 0.25rem 0"
                    size="2rem"
                    weight={700}
                    color={colors.ltGray}
                >
                  <em><u>Join us in 2023 at...</u></em>
                </Body>
                <SubTitle
                    size="3.5rem"
                    width="80%"
                    mobSize="2rem"
                    margins="0 0"
                    self="start"
                    align="start"
                    line={0.9}
                    color={colors.ltGray}
                >
                  The Palmer House Hilton Chicago
                </SubTitle>
                <Body
                    align="start"
                    self="start"
                    margins="0 0 0.25rem 0"
                    size="2rem"
                    color={colors.ltGray}
                >
                  <strong><em>17 E Monroe Street, Chicago, Illinois</em></strong>
                </Body>
              </CardContainer>
            </CardWrapper>
          </CardWrapper>
        </InfoColumnWrapper>
        </>
  );
};
