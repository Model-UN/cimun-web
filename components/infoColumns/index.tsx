import Link from "next/link";
import { SubTitle, Body } from "../../styles/typography";
import { colors } from "../../styles/colors";
import { InfoColumnWrapper, CardWrapper, CardContainer } from "./infoColumns.styles";
import LetterElement from "./letter.element";
import React from "react";

export default function InfoColumns(): JSX.Element {
  return (
      <>
        <LetterElement />
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
                  February 4th - 6th, 2022
                </SubTitle>
                  <Body
                      align="start"
                      self="start"
                      margins="0.5rem 0 0.25rem 0"
                      size="2rem"
                      color={colors.ltGray}
                  >
                    <a
                        href="/schedule.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                      <strong>[View the Full Schedule <u>Here</u>]</strong>
                    </a>
                  </Body>
              </CardContainer>
              <CardContainer
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
              </CardContainer>

            </CardWrapper>
            <CardWrapper
                margins="0"
                direction="column"
            >
              <CardContainer
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
              </CardContainer>
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
                  <em><u>Interested in attending CIMUN?</u></em>
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
                  Register your school for CIMUN XVIII!
                </SubTitle>
                <Body
                    align="start"
                    self="start"
                    margins="0.5rem 0"
                    size="2rem"
                    weight={700}
                    color={colors.ltGray}
                >
                  <Link href="/school-registration">
                    <a><strong>[<u>Register Now</u>]</strong></a>
                  </Link>
                  {/*{" "}|{" "}*/}
                  {/*<Link href="/registration-information.pdf">*/}
                  {/*  <a><strong>[<u>Pricing & More Info</u>]</strong></a>*/}
                  {/*</Link>*/}
                </Body>
              </CardContainer>
            <CardContainer
              margins="0 0 1rem 1rem"
              flex="1"
              color={colors.dkGray}
            >
                <Body
                    align="end"
                    self="end"
                    margins="0 0 0.25rem 0"
                    size="2rem"
                    weight={700}
                    color={colors.ltGray}
                >
                  <em><u>Want to volunteer for CIMUN?</u></em>
                </Body>
                <SubTitle
                    size="3.5rem"
                    width="80%"
                    mobSize="2rem"
                    margins="0 0"
                    self="end"
                    align="end"
                    line={0.9}
                    color={colors.ltGray}
                >
                  Apply to Join Our Staff!
                </SubTitle>
              <Body
                  align="end"
                  self="end"
                  margins="0.5rem 0"
                  size="2rem"
                  color={colors.ltGray}
              >
                Applicants are being considered on a rolling basis to
                join our amazing team!
                <br/>
                <Link href="/staff-apps">
                  <a><strong>[<u>Click Here To Apply</u>]</strong></a>
                </Link>
              </Body>
            </CardContainer>
            </CardWrapper>
          </CardWrapper>
        </InfoColumnWrapper>
        </>
  );
};
