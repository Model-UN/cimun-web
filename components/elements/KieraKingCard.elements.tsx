import React from "react";
import Link from "next/link";
import { ComponentWrapper } from "../../styles/containers";
import { CardContainer } from "../infoColumns/infoColumns.styles";
import { colors } from "../../styles/colors";
import { Body, SubTitle } from "../../styles/typography";

const AwardAnnouncementCard = () => {
  return (
    <ComponentWrapper margins="auto" pad="0rem 6rem 0rem 6rem">
      <CardContainer margins="0" color={colors.plum} radius="8px">
        <Body
          align="start"
          self="start"
          margins="0 0 0.25rem 0"
          size="2rem"
          weight={900}
          deco="underline"
          color={colors.ivory}
        >
          Scholarship Opportunity for Delegates
        </Body>
        <SubTitle
          size="2.5rem"
          width="80%"
          $mobSize="1.5rem"
          margins="10px 0"
          self="start"
          align="start"
          line={0.9}
          color={colors.ivory}
        >
          Apply for the Kiera King Delegate Award!
        </SubTitle>
        <Body
          align="start"
          self="start"
          margins="0.25rem"
          size="1.5rem"
          weight={400}
          color={colors.ivory}
        >
          The Kiera King Delegate Award is a delegate scholarship in the memory
          of Kiera King, a dedicated Model UN delegate and former member of
          Adlai E. Stevenson Model United Nations. This award aims to recognize
          delegates with similar experiences so that they might continue their
          competitive and professional legacies with an acknowledgement of those
          who did not receive the same opportunities. The winner of the award
          will receive $500 to support their education or career after
          completing their high school education.
          <br />
          <br />
          <strong>
            Advisors must nominate students using this google form:
            <Link href="https://forms.gle/GJ8RmBZ6XXeAoWCR6">
              Nomination Form
            </Link>
          </strong>
        </Body>
      </CardContainer>
    </ComponentWrapper>
  );
};

export default AwardAnnouncementCard;
