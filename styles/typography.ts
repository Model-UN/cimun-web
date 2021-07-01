import { fonts } from "./fonts";
import { colors } from "./colors";
import styled from 'styled-components'

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
  line?: number;
  margins?: string;
  self?: string;
  width?: string;
  align?: string;
};

export const Display = styled.h1<TextType>`
  font-family: ${fonts.display} , sans-serif;
  align-self: ${(props: TextType) =>
      props.self ? props.self : "flex-start"};
  margin: ${(props: TextType) =>
      props.margins ? props.margins : "0"};
  color: ${(props: TextType) => props.color ? props.color : "white"};
  font-size: ${(props: TextType) =>
      props.size ? props.size : "18vw"};
  line-height: ${(props: TextType) =>
      props.line ? props.line : 1};
  width: ${(props: TextType) =>
      props.width ? props.width : undefined};
  text-align: ${(props: TextType) =>
      props.align ? props.align : 'left'};
`;

export const Header = styled.h2<TextType>`
  font-family: ${fonts.header} , serif;
  align-self: ${(props: TextType) =>
      props.self ? props.self : "flex-start"};
  margin: ${(props: TextType) =>
      props.margins ? props.margins : undefined};
  color: ${(props: TextType) => props.color ? props.color : "black"};
  font-size: ${(props: TextType) =>
      props.size ? props.size : "2vw"};
  line-height: ${(props: TextType) =>
      props.line ? props.line : undefined};
  width: ${(props: TextType) =>
      props.width ? props.width : undefined};
  text-align: ${(props: TextType) =>
      props.align ? props.align : 'left'};
`;

export const SubTitle = styled.h3<TextType>`
  font-family: ${fonts.subtitle} , sans-serif;
  align-self: ${(props: TextType) =>
      props.self ? props.self : "flex-start"};
  margin: ${(props: TextType) =>
      props.margins ? props.margins : undefined};
  color: ${(props: TextType) => props.color ? props.color : "black"};
  font-size: ${(props: TextType) =>
      props.size ? props.size : "2rem"};
  line-height: ${(props: TextType) =>
      props.line ? props.line : undefined};
  width: ${(props: TextType) =>
      props.width ? props.width : undefined};
  text-align: ${(props: TextType) =>
      props.align ? props.align : 'left'};
`;

export const Body = styled.p<TextType>`
  font-family: ${fonts.body} , sans-serif;
  align-self: ${(props: TextType) =>
      props.self ? props.self : "flex-start"};
  margin: ${(props: TextType) =>
      props.margins ? props.margins : undefined};
  color: ${(props: TextType) => props.color ? props.color : "black"};
  font-size: ${(props: TextType) =>
      props.size ? props.size : "1rem"};
  line-height: ${(props: TextType) =>
      props.line ? props.line : undefined};
  width: ${(props: TextType) =>
      props.width ? props.width : undefined};
  text-align: ${(props: TextType) =>
      props.align ? props.align : 'left'};
`;