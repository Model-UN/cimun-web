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
                  February 2th - 4th, 2023
                </SubTitle>
<!--                   <Body
                      align="start"
                      self="start"
                      margins="0.5rem 0 0.25rem 0"
                      size="2rem"
                      color={colors.ltGray}
                  >
                    <a
                        href="/DelegateGuide.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                      <strong>[Delegate Guide]</strong>
                    </a><br/>
                    <a
                        href="/schedule.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                      <strong>[Full Conference Schedule]</strong>
                    </a>
                  </Body> -->
              </CardContainer>
<!--               <CardContainer
                  noMargins
                  color={colors.ltGray}
              >
                <Body
                    align="start"
                    self="start"
                    margins="0 0 0.25rem 0"
                    size="2rem"
                    weight={700}
                    color={colors.primaryBlue}
                >
                  <em><u>Other Important Dates!</u></em>
                </Body>
                <SubTitle
                    size="3.5rem"
                    width="70%"
                    mobSize="2rem"
                    margins="0 0"
                    self="start"
                    align="start"
                    line={0.9}
                    color={colors.primaryBlue}
                >
                  Position Paper Submission
                </SubTitle>
                <Body
                    align="start"
                    self="start"
                    margins="0 0 0.25rem 0"
                    size="2rem"
                    color={colors.primaryBlue}
                >
                  <em>Begins soon</em>, due <strong><em>February 1st, 2022</em></strong>
                </Body>
                <Body
                    align="end"
                    self="end"
                    margins="0.5rem 0 0.25rem 0"
                    size="2rem"
                    weight={700}
                    color={colors.primaryBlue}
                >
                  <em><u>Coming soon to CIMUN.org...</u></em>
                </Body>
                <SubTitle
                    size="3.5rem"
                    width="70%"
                    mobSize="2rem"
                    margins="0 0"
                    self="end"
                    align="end"
                    line={0.9}
                    color={colors.primaryBlue}
                >
                  Background Guides
                </SubTitle>
                <Body
                    align="end"
                    self="end"
                    margins="0 0 0.25rem 0"
                    size="2rem"
                    color={colors.primaryBlue}
                >
                  <em><strong>January 10th, 2022</strong></em>
                </Body>
              </CardContainer> -->

            </CardWrapper>
            <CardWrapper
                margins="0"
                direction="column"
            >
<!--               <CardContainer
                  margins="0 0 1rem 1rem"
                  flex="1"
                  color={colors.dkGray}
              >
                <Body
                    align="start"
                    self="start"
                    margins="0 0 0.25rem 0"
                    size="2rem"
                    weight={700}
                    color={colors.ltGray}
                >
                  <u>NOW LIVE!</u>
                </Body>
                <SubTitle
                    size="3.5rem"
                    width="100%"
                    mobSize="2rem"
                    margins="0 0"
                    self="start"
                    align="start"
                    line={0.9}
                    color={colors.ltGray}
                >
                  Check out this year's committees, cabinets, and topics!
                </SubTitle>
                <Body
                    align="start"
                    self="start"
                    margins="0.5rem 0"
                    size="2rem"
                    weight={700}
                    color={colors.ltGray}
                >
                  <Link href="/committees">
                    <a><strong>[<u>Read More</u>]</strong></a>
                  </Link>
                </Body>
              </CardContainer> -->
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
                    color={colors.primaryBlue}
                >
                  <strong><em>17 E Monroe Street, Chicago, Illinois</em></strong>
                </Body>
              </CardContainer>
            </CardWrapper>
          </CardWrapper>
        </InfoColumnWrapper>
        // <LetterElement />
        </>
  );
};
