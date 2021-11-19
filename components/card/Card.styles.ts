import styled from 'styled-components';
import { breakpoints } from "../../styles/breakpoints";

export const CardWrapper = styled.div<{
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

export const CardImage = styled.div<{ children: string }>`
`;

export const CardText = styled.div`
`;

export const CardContainer = styled.div<{
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
  ${breakpoints("padding", "", [{ 1400: "1rem" }])};
  ${breakpoints("margin", "", [{ 1400: "1rem 0" }])};
`;