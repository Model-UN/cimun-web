import { fonts } from "./fonts";
import { colors } from "./colors";
import styled from "styled-components";
import { breakpoints } from "./breakpoints";

/* Example on how to pass custom prop without pissing off typescript
 ${(props: {
  investmentSplashTitle?: boolean; ///Passing Optional Props
  }) =>
    props.investmentSplashTitle &&
    `
      color: ${colors.primaryBlue};
      font-weight: bold;
      text-align: center;
      letter-spacing: 1px;
  `}
  */
interface TextType {
  color?: string; ///Passing Optional Props
  size?: string;
  mobSize?: string; // mobile size
  mobMargins?: string; // mobile size
  line?: number;
  margins?: string;
  self?: string;
  width?: string;
  align?: string;
  weight?: number;
  styling?: string;
  deco?: string;
}

export const Display = styled.h1<TextType>`
  font-family: ${fonts.display}, sans-serif;
  font-style: ${(props: TextType) =>
    props.styling ? props.styling : "normal"};
  align-self: ${(props: TextType) => (props.self ? props.self : "flex-start")};
  margin: ${(props: TextType) => (props.margins ? props.margins : "0")};
  color: ${(props: TextType) => (props.color ? props.color : "white")};
  font-size: ${(props: TextType) => (props.size ? props.size : "18vw")};
  line-height: ${(props: TextType) => (props.line ? props.line : 1)};
  width: ${(props: TextType) => (props.width ? props.width : undefined)};
  text-align: ${(props: TextType) => (props.align ? props.align : "left")};
`;

export const Header = styled.h2<TextType>`
  font-family: ${fonts.header}, serif;
  font-style: ${(props: TextType) =>
    props.styling ? props.styling : "normal"};
  align-self: ${(props: TextType) => (props.self ? props.self : "flex-start")};
  margin: ${(props: TextType) => (props.margins ? props.margins : undefined)};
  color: ${(props: TextType) => (props.color ? props.color : "black")};
  font-size: ${(props: TextType) => (props.size ? props.size : "2rem")};
  ${(props: TextType) =>
    props.mobSize
      ? breakpoints("font-size", "", [{ 1000: props.mobSize }])
      : breakpoints("font-size", "", [{ 1000: "1.0rem" }])}
  line-height: ${(props: TextType) => (props.line ? props.line : undefined)};
  width: ${(props: TextType) => (props.width ? props.width : undefined)};
  text-align: ${(props: TextType) => (props.align ? props.align : "left")};
`;

export const SubTitle = styled.h3<TextType>`
  font-family: ${fonts.subtitle}, sans-serif;
  font-style: ${(props: TextType) =>
    props.styling ? props.styling : "normal"};
  align-self: ${(props: TextType) => (props.self ? props.self : "flex-start")};
  margin: ${(props: TextType) => (props.margins ? props.margins : undefined)};
  color: ${(props: TextType) => (props.color ? props.color : "black")};
  font-size: ${(props: TextType) => (props.size ? props.size : "2rem")};
  ${(props: TextType) =>
    props.mobSize
      ? breakpoints("font-size", "", [{ 1000: props.mobSize }])
      : breakpoints("font-size", "", [{ 1000: "1.5rem" }])}
  font-weight: ${(props: TextType) => (props.weight ? props.weight : 1000)};
  line-height: ${(props: TextType) => (props.line ? props.line : undefined)};
  width: ${(props: TextType) => (props.width ? props.width : undefined)};
  text-align: ${(props: TextType) => (props.align ? props.align : "left")};
`;

export const Body = styled.p<TextType>`
  font-family: ${fonts.body}, sans-serif;
  font-style: ${(props: TextType) =>
    props.styling ? props.styling : "normal"};
  text-decoration: ${(props: TextType) => (props.deco ? props.deco : "none")};
  align-self: ${(props: TextType) => (props.self ? props.self : "flex-start")};
  margin: ${(props: TextType) => (props.margins ? props.margins : undefined)};
  ${(props) =>
    props.mobMargins
      ? breakpoints("margin", "", [{ 1000: props.mobMargins }])
      : breakpoints("margin", "", [{ 1000: "0 0 0 0" }])}
  color: ${(props: TextType) => (props.color ? props.color : "black")};
  font-size: ${(props: TextType) => (props.size ? props.size : "1.2rem")};
  ${breakpoints("font-size", "", [{ 1000: "1rem", 400: "0.7rem" }])};
  line-height: ${(props: TextType) => (props.line ? props.line : undefined)};
  ${breakpoints("line-height", "", [{ 1000: "1.75rem", 400: "1rem"}])};
  width: ${(props: TextType) => (props.width ? props.width : undefined)};
  text-align: ${(props: TextType) => (props.align ? props.align : "left")};
  font-weight: ${(props: TextType) => (props.weight ? props.weight : 500)};
`;
