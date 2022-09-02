import { colors } from "./colors";
import styled from "styled-components";
import {breakpoints} from "./breakpoints";

/* responsive full screen height:width ratio = 9/16 = .5625  */

interface ContainerType {
  color?: string; // Passing Optional Props
  margins?: string;
  width?: string;
  height?: string;
  minHeight?: string;
  maxHeight?: string;
  justify?: string;
  align?: string;
  direction?: string;
  display?: string;
  brightness?: string;
  radius?: string;
  pad?: string;
}

export const Wrapper = styled.div<ContainerType>`
  margin: ${(props: ContainerType) => props.margins ? props.margins : undefined};
  background-color: ${(props: ContainerType) => props.color ? props.color : colors.ivory};
  width: ${(props: ContainerType) => (props.width ? props.width : "100%")};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ComponentWrapper = styled.div<ContainerType>`
  margin: ${(props: ContainerType) => props.margins ? props.margins : "3.9375vw auto"};
  
  padding: ${(props: ContainerType) => props.pad ? props.pad : "1rem 0 1rem 0"};
  ${breakpoints("padding", "", [{ 1200: "0.5rem 0 0.5rem 0" }])};
  
  background-color: ${(props: ContainerType) => props.color ? props.color : "transparent"};
  width: ${(props: ContainerType) => (props.width ? props.width : "94vw")};
  max-width: ${(props: ContainerType) => (props.width ? props.width : "94vw")};
  min-width: ${(props: ContainerType) => (props.width ? props.width : "94vw")};
  height: ${(props: ContainerType) => (props.height ? props.height : "auto")};
  min-height: ${(props: ContainerType) => props.minHeight ? props.minHeight : undefined};
  max-height: ${(props: ContainerType) => props.maxHeight ? props.maxHeight : undefined};
  display: ${(props: ContainerType) => props.display ? props.display : "flex"};
  flex-direction: ${(props: ContainerType) => props.direction ? props.direction : "column"};
  justify-content: ${(props: ContainerType) => props.justify ? props.justify : "center"};
  align-items: ${(props: ContainerType) => props.align ? props.align : "center"};
  border-radius: ${(props: ContainerType) => props.radius ? props.radius : "none"};
`;
