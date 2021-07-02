import { ComponentWrapper } from "../../styles/containers";
import { SubTitle, Body } from "../../styles/typography";
import { colors } from "../../styles/colors";
import { breakpoints } from "../../styles/breakpoints";
import Link from "next/link";
import styled from "styled-components";

const InfoColumnWrapper = styled(ComponentWrapper)`
  display: flex;
  flex: 1;
  width: 94vw;
  margin: 3.9375vw auto;
  ${breakpoints("margin", "", [{ 1000: "10px 0" }])};
  justify-content: space-between;
  flex-direction: row;
  ${breakpoints("flex-direction", "", [{ 1000: "column" }])};
`;
const CardWrapper = styled.div<{
  bordered?: boolean;
  flex?: string;
  height?: string;
  margins?: string;
  pad?: string;
}>`
  display: flex;
  flex: ${(props) => (props.flex ? props.flex : "1")};
  ${breakpoints("flex", "", [{ 1400: "1" }])};
  ${breakpoints("width", "", [{ 1400: "100%" }])};
  align-items: center;
  flex-direction: row;
  ${breakpoints("flex-direction", "", [{ 1400: "column" }])};
  justify-content: space-between;
  ${breakpoints("align-items", "", [{ 1400: "flex-end" }])};
  margin: ${(props) => (props.margins ? props.margins : "1rem")};
  padding: ${(props) => (props.pad ? props.pad : "1.5rem")};
  ${breakpoints("padding", "", [{ 1400: "1.5rem auto" }])};
  ${breakpoints("margin", "", [{ 1400: "1rem 0" }])};
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
  flex: ${(props) => (props.flex ? props.flex : "1")};
  ${breakpoints("flex", "", [{ 1400: "1" }])};
  ${breakpoints("min-width", "", [{ 1400: "45vw" }])};
  ${breakpoints("width", "", [{ 1000: "94vw" }])};
  height: ${(props) => (props.height ? props.height : "auto")};
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: ${(props) => (props.color ? props.color : "transparent")};
  margin: ${(props) => (props.margins ? props.margins : "1rem")};
  padding: ${(props) => (props.pad ? props.pad : "1.5rem")};
  ${breakpoints("padding", "", [{ 1400: "1.5rem auto" }])};
  ${breakpoints("margin", "", [{ 1400: "1rem 0" }])};
`;
const Title = styled(SubTitle)`
  font-size: 4rem;
  ${breakpoints("font-size", "", [{ 1000: "2.5rem" }])};
  width: 100px;
  ${breakpoints("width", "", [{ 1000: "100%" }])};
  margin: 0;
`;

const InfoColumns = () => {
  return (
    <InfoColumnWrapper>
      <CardContainer flex="1" margins="1rem 0" pad="1rem 1rem 1rem 0">
        <Title>About CIMUN</Title>
        <Body size="1rem" line={1.4}>
          For 18 years, CIMUN has been a premier conference for scholastic Model
          United Nations programs. <br />
          <br />
          Beginning with our opening ceremonies, delegates are introduced to a
          24/7, fully-integrated simulation, where they are challenged to work
          across committees as they confront complex present-day and historical
          issues. <br />
          <br />
          The CIMUN Philosophy believes that educational value is defined by
          realism. In this regard, action taken in one committee affects the
          proceedings in every other committee. Crises occur in real-time
          throughout the conference, and CIMUN staff diligently work to create a
          conference that is fast-paced, nuanced, and above all else,
          educational. CIMUN recognizes that nations cannot always solve
          problems together, and that the complexity of international affairs is
          high. Delegates are rewarded for demonstrating comprehensive knowledge
          of their nation's stance and role on the global stage, rather than for
          passing empty resolutions or for compromising their nation's values.
          <br />
          <br />
          As an independent conference, CIMUN is not affiliated with any
          university. Rather, we are a diverse and talented team of students,
          post-graduates, and professionals from backgrounds in academia,
          finance, politics, business, technology and more to deliver a
          high-caliber educational experience to our delegates.
        </Body>
      </CardContainer>
      <CardWrapper flex="2" margins="1rem 0" pad="1rem 0 1rem 1rem">
        <CardContainer
          bordered
          height="600px"
          color={colors.fadedPrimaryBlue}
          margins="1rem 1rem 0 0"
        >
          <SubTitle size="2.5rem" margins="20px 0" self="center">
            Join Us!
          </SubTitle>
          <div
            style={{
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Body align="center" self="center" size="1.2rem">
              <b>February 3rd - 6th 2022</b>
            </Body>
            <Body align="center" self="center" size="1.2rem">
              <b>The Palmer House Hilton Hotel</b>
              <br />
              <i>17 East Monroe Street Chicago, IL 60603</i>
            </Body>
          </div>
        </CardContainer>
        <CardContainer
          bordered
          height="600px"
          color={colors.fadedltGray}
          margins="1rem 0 0 1rem"
        >
          <SubTitle size="2.5rem" margins="20px 0" self="center" align="center">
            Don't Miss Out!
          </SubTitle>
          <div
            style={{
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Body align="center" self="center" size="1.2rem">
              <b>September 1st 2021</b> - School Applications Open
            </Body>
            <Body align="center" self="center" size="1.2rem">
              <b>August 1st 2021</b> - Staff Applications Open
            </Body>
            <Body align="center" self="center" size="1.2rem">
              <b>January 16th 2022</b> - Position Papers Open
            </Body>
          </div>
        </CardContainer>
      </CardWrapper>
    </InfoColumnWrapper>
  );
};

export default InfoColumns;
