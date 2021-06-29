import { colors } from "./colors";
import styled from 'styled-components'

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
};

export const Wrapper = styled.div<ContainerType>`
  margin: ${(props: ContainerType) =>
    props.margins ? props.margins : undefined};
  background-color: ${(props: ContainerType) => props.color ? props.color : "white"};
  width: ${(props: ContainerType) =>
    props.width ? props.width : undefined};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ComponentWrapper = styled.div<ContainerType>`
  margin: ${(props: ContainerType) =>
    props.margins ? props.margins : "3.9375vw auto"};
  background-color: ${(props: ContainerType) => props.color ? props.color : "transparent"};
  width: ${(props: ContainerType) =>
    props.width ? props.width : "94vw"};
  max-width: ${(props: ContainerType) =>
    props.width ? props.width : "94vw"};
  min-width: ${(props: ContainerType) =>
    props.width ? props.width : "94vw"};
  height: ${(props: ContainerType) =>
    props.height ? props.height : "auto"};
  min-height: ${(props: ContainerType) =>
    props.minHeight ? props.minHeight : undefined};
  max-height: ${(props: ContainerType) =>
    props.maxHeight ? props.maxHeight : undefined};
  display: ${(props: ContainerType) =>
    props.display ? props.display : "flex"};
  flex-direction: ${(props: ContainerType) =>
    props.direction ? props.direction : "column"};
  justify-content: ${(props: ContainerType) =>
    props.justify ? props.justify : "center"};
  align-items: ${(props: ContainerType) =>
    props.align ? props.align : "center"};
`;

// max-height: 86vh;
//   min-height: 40.5vw;
//   height: 48.375vw; /* height:width ratio = 9/16 = .5625  */