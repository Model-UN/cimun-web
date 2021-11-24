import React from 'react';
import styled from 'styled-components';
import { ComponentWrapper } from '_app/styles/containers';
import { Body, SubTitle } from '_app/styles/typography';
import { breakpoints } from '_app/styles/breakpoints';
import colors from '_app/styles/colors';

const InfoColumnWrapper = styled(ComponentWrapper)`
  display: flex;
  flex: 1;
  width: 94vw;
  margin: 3.9375vw auto;
  ${breakpoints('margin', '', [{ 1000: '10px 0' }])};
  justify-content: space-between;
  flex-direction: row;
  ${breakpoints('flex-direction', '', [{ 1000: 'column' }])};
`;
const CardWrapper = styled.div<{
  bordered?: boolean;
  flex?: string;
  height?: string;
  margins?: string;
  pad?: string;
}>`
  display: flex;
  flex: ${(props) => (props.flex ? props.flex : '1')};
  ${breakpoints('flex', '', [{ 1400: '1' }])};
  ${breakpoints('width', '', [{ 1400: '100%' }])};
  align-items: center;
  flex-direction: row;
  ${breakpoints('flex-direction', '', [{ 1400: 'column' }])};
  justify-content: space-between;
  ${breakpoints('align-items', '', [{ 1400: 'flex-end' }])};
  margin: ${(props) => (props.margins ? props.margins : '1rem')};
  padding: ${(props) => (props.pad ? props.pad : '1.5rem')};
  ${breakpoints('padding', '', [{ 1400: '1.5rem auto' }])};
  ${breakpoints('margin', '', [{ 1400: '1rem 0' }])};
`;
const CardContainer = styled.div<{
  bordered?: boolean;
  flex?: string;
  height?: string;
  color?: string;
  margins?: string;
  pad?: string;
}>`
  display: flex;
  flex: ${(props) => (props.flex ? props.flex : '1')};
  ${breakpoints('flex', '', [{ 1400: '1' }])};
  ${breakpoints('min-width', '', [{ 1400: '45vw' }])};
  ${breakpoints('width', '', [{ 1000: '94vw' }])};
  height: ${(props) => (props.height ? props.height : 'auto')};
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: ${(props) => (props.color ? props.color : 'transparent')};
  margin: ${(props) => (props.margins ? props.margins : '1rem')};
  padding: ${(props) => (props.pad ? props.pad : '1.5rem')};
  ${breakpoints('padding', '', [{ 1400: '1rem' }])};
  ${breakpoints('margin', '', [{ 1400: '1rem 0' }])};
`;
const Title = styled(SubTitle)`
  font-size: 6rem;
  ${breakpoints('font-size', '', [{ 1000: '4rem' }, { 720: '2.25rem' }])};
  width: 100px;
  ${breakpoints('width', '', [{ 1000: '100%' }])};
  margin: 0;
  font-weight: 1000;
`;

const InfoColumns = () => (
  <InfoColumnWrapper>
    <CardContainer flex="1" margins="1rem 0" pad="0 1rem 0 0">
      <Title line={0.9}>Welcome Back, Delegates.</Title>
      <Body line={1.4} align="justify">
        For 18 years, CIMUN has been a premier conference for scholastic
        Model
        United Nations programs.
        {' '}
        <br />
        <br />
        Beginning with our opening ceremonies, delegates are introduced to a
        fully-integrated simulation, where they are challenged to work
        across
        committees as they confront complex present-day and historical
        issues.
        {' '}
        <br />
        <br />
        The CIMUN Philosophy is to educate through
        {' '}
        <em>accuracy and realism</em>
        . In this regard, action taken in one
        committee affects the proceedings in every other committee. Crises
        occur in real-time throughout the weekend, and CIMUN staff
        diligently
        work to create a conference that is fast-paced, nuanced, and above
        all
        else, educational. CIMUN recognizes that nations cannot always solve
        problems together, and that the complexity of international affairs
        is
        high. Delegates are rewarded for demonstrating comprehensive
        knowledge
        of their nation&apos;s stance and role on the global stage, rather
        than
        for
        passing empty resolutions or for compromising their nation&apos;s
        values.
        <br />
        <br />
        As an independent conference, CIMUN is not affiliated with any
        university. Rather, we are a diverse and talented team of students,
        post-graduates, and professionals from backgrounds in academia,
        finance, politics, business, technology and more to deliver a
        high-caliber educational experience to our delegates.
        <br />
        <br />
        This coming year, we welcome you - delegates, faculty, sponsors, and
        all others -
        <em> in-person</em>
        , to the
        {' '}
        <strong>
          {' '}
          18th Chicago International Model United Nations conference
        </strong>
        . We hope you can make it!
      </Body>
    </CardContainer>
    <CardWrapper flex="2" margins="1rem 0" pad="1rem 0 6rem 1rem">
      <CardContainer
        bordered
        height="600px"
        color={colors.primaryBlue}
        margins="1rem 1rem 0 0"
      >
        <SubTitle
          size="3.5rem"
          mobSize="2rem"
          margins="10px 0"
          self="center"
          align="center"
          line={0.9}
          color={colors.ltGray}
        >
          Join us in-person!
        </SubTitle>
        <div
          style={{
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Body
            align="center"
            self="center"
            size="2rem"
            weight={700}
            color={colors.ltGray}
          >
            February 3rd - 6th, 2022
          </Body>
          <Body
            align="center"
            self="center"
            size="2rem"
            color={colors.ltGray}
          >
            <b>The Palmer House Hilton Hotel</b>
            <br />
            <i>
              17 East Monroe Street
              <br />
              Chicago, IL 60603
            </i>
          </Body>
        </div>
      </CardContainer>
      <CardContainer
        bordered
        height="600px"
        color={colors.fadedPrimaryBlue}
        margins="1rem 0 0 1rem"
      >
        <SubTitle
          size="3.5rem"
          mobSize="1.9rem"
          margins="10px 0"
          self="center"
          align="center"
          line={0.9}
        >
          Don&apos;t Miss Out!
        </SubTitle>
        <SubTitle size="2rem" margins="10px 0" self="center" align="center">
          Save these dates:
        </SubTitle>
        <div
          style={{
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Body align="center" self="center" size="1.75rem">
            <b>August 15th, 2021</b>
            {' '}
            - Staff Applications Open
          </Body>
          <Body align="center" self="center" size="1.75rem">
            <b>September 1st, 2021</b>
            {' '}
            - School Applications Open
          </Body>
          <Body align="center" self="center" size="1.75rem">
            <b>January 16th, 2022</b>
            {' '}
            - Position Papers Submissions
          </Body>
        </div>
      </CardContainer>
    </CardWrapper>
  </InfoColumnWrapper>
);

export default InfoColumns;
