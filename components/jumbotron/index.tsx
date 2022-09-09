import { Display, Header } from "../../styles/typography";
import { ComponentWrapper } from "../../styles/containers";
import styles from "./Jumbotron.module.css";
import { colors } from "../../styles/colors";
import { ReactChildren, ReactElement, ReactNode } from "react";

interface JumboTronProps {
  titleOne: string;
  subTitle?: string | JSX.Element;
  children?: ReactChildren | ReactElement | ReactNode;
}

const Jumbotron = (props: JumboTronProps) => {
  const { titleOne, subTitle, children } = props;

  return (
    <ComponentWrapper
      height="95vw"
      maxHeight="88vh"
      margins="0 0 5rem 0"
      width="100%"
      color={colors.indigo}
    >
      <Display
        color={colors.ivory}
        self="center"
        size="12vw"
        mobSize="16vw"
        align="center"
      >
        {titleOne}
      </Display>
      <Header
        size="2.3vw"
        color={colors.ivory}
        margins="2rem 0 0 0"
        line={1.2}
        width="60vw"
        align="center"
        self="center"
        mobSize="3.75vw"
      >
        {subTitle}
      </Header>
      {children}
    </ComponentWrapper>
  );
};

export default Jumbotron;
