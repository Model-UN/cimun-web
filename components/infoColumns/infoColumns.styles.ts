import styled from "styled-components";
import { ComponentWrapper } from "../../styles/containers";
import { breakpoints } from "../../styles/breakpoints";
import { SubTitle } from "../../styles/typography";

export const InfoColumnWrapper = styled(ComponentWrapper)`
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  flex: 1;
  width: 90%;
  justify-content: space-between;
  flex-direction: row;

  ${breakpoints("margin", "", [{ 1000: "10px auto" }])};
  ${breakpoints("flex-direction", "", [{ 1000: "column" }])};
`;

export const CardWrapper = styled.div<{
  bordered?: boolean;
  flex?: string;
  height?: string;
  margins?: string;
  pad?: string;
  direction?: string;
  noMargins?: boolean;
}>`
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  flex: 1;
  justify-content: space-around;
  align-items: center;

  flex: ${(props) => (props.flex ? props.flex : "1")};
  ${breakpoints("flex", "", [{ 1500: "1" }])};

  flex-direction: ${(props) => (props.direction ? props.direction : "row")}};
  ${breakpoints("flex-direction", "", [{ 1200: "column" }])};

  ${(props) =>
    props.margins ? `margin: ${props.margins}` : `margin: 1rem 0 0 0`};
  ${breakpoints("margin", "", [{ 1500: "0" }])};

  ${(props) => (props.pad ? `padding: ${props.pad}` : "padding: auto")};
  ${breakpoints("width", "", [{ 1500: "100%" }])};
  ${breakpoints("align-items", "", [{ 1500: "flex-end" }])};
`;

export const CardContainer = styled.div<{
  bordered?: boolean;
  flex?: string;
  height?: string;
  color?: string;
  margins?: string;
  pad?: string;
  mobMargins?: string;
  noMargins?: boolean;
  align?: string;
  radius?: string;
}>`
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  flex-direction: column;
  flex: ${(props) => (props.flex ? props.flex : "1")};
  ${breakpoints("flex", "", [{ 1500: "1" }])};

  align-items: ${(props) => (props.align ? props.align : "center")};
  justify-content: center;
  background-color: ${(props) => (props.color ? props.color : "transparent")};

  border-radius: ${(props) => (props.radius ? props.radius : "0")};

  height: ${(props) => (props.height ? props.height : "auto")};
  min-height: 315px;
  ${breakpoints("min-height", "", [{ 1000: "200px" }])};
  width: 100%;
  ${breakpoints("min-width", "", [{ 1500: "45vw" }])};
  ${breakpoints("width", "", [{ 700: "94vw" }])};

  margin: ${(props) => props.noMargins ? "1rem 0 0 0" : props.margins ? props.margins : "1rem"};
  ${breakpoints("margin", "", [{ 1500: "auto", 1000: "10px auto" }])};

  padding: ${(props) => (props.pad ? props.pad : "1.5rem")};
  ${breakpoints("padding", "", [{ 1500: "1rem" }])};
`;

export const Title = styled(SubTitle)`
  font-weight: 1000;
  font-size: 6rem;
  ${breakpoints("font-size", "", [{ 1000: "4rem" }])};
  margin: ${(props) => (props.margins ? props.margins : "0rem")};
  ${(props) =>
    props.mobMargins
      ? breakpoints("margin", "", [{ 1000: props.mobMargins }])
      : breakpoints("margin", "", [{ 1000: "1rem 1rem 0 1rem" }])}
`;
