import styled from "styled-components";
import {ComponentWrapper} from "../../styles/containers";
import {breakpoints} from "../../styles/breakpoints";
import {SubTitle} from "../../styles/typography";

export const InfoColumnWrapper = styled(ComponentWrapper)`
  display: flex;
  flex: 1;
  width: 90%;
  margin: auto;
  justify-content: space-between;
  flex-direction: row;
  
  ${breakpoints("margin", "", [{ 1000: "10px 0" }])};
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
  display: flex;
  justify-content: space-around;
  align-items: center;

  flex: ${(props) => (props.flex ? props.flex : "1")};
  ${breakpoints("flex", "", [{ 1500: "1" }])};
  
  flex-direction: ${props => (props.direction ? props.direction : "row")}};
  ${breakpoints("flex-direction", "", [{ 1200: "column" }])};

  margin: ${(props) => (props.margins ? props.margins : "1rem 0 0 0")};
  ${breakpoints("margin", "", [{ 1500: "0" }])};

  padding: ${(props) => (props.pad ? props.pad : "auto")};
  ${breakpoints("padding", "", [{ 1500: "auto" }])};
  
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
  noMargins?: boolean;
  align?: string;
  radius?: string;
}>`
  display: flex;
  flex-direction: column;
  flex: ${(props) => (props.flex ? props.flex : "1")};
  ${breakpoints("flex", "", [{ 1500: "1" }])};
  
  align-items: ${(props) => (props.align ? props.align : "center")};
  justify-content: center;
  background-color: ${(props) => (props.color ? props.color : "transparent")};
  
  border-radius: ${(props) => props.radius ? props.radius : "0"};
  
  height: ${(props) => (props.height ? props.height : "auto")};
  width: 100%;
  ${breakpoints("min-width", "", [{ 1500: "45vw" }])};
  ${breakpoints("width", "", [{ 700: "94vw" }])};
  
  margin: ${(props) => props.noMargins ? "1rem 0 0 0" : (props.margins ? props.margins : "1rem")};
  ${breakpoints("margin", "", [{ 1500: "auto" }])};
  
  padding: ${(props) => (props.pad ? props.pad : "1.5rem")};
  ${breakpoints("padding", "", [{ 1500: "1rem" }])};
`;

export const Title = styled(SubTitle)`
  font-size: 6rem;
  ${breakpoints("font-size", "", [{ 1000: "4rem" }, { 720: "2.25rem" }])};
  width: 100%;
  margin: 0;
  font-weight: 1000;
`;

