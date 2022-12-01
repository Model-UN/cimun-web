import { Display, Header } from "../../styles/typography";
import { ComponentWrapper } from "../../styles/containers";
import styles from "./Jumbotron.module.css";
import { colors } from "../../styles/colors";

interface JumboTronProps {
  titleOne: string;
  titleTwo: string;
  height: number;
  subTitle?: string | JSX.Element;
  image?: string; // background image
  bottomMargin?: string;  // margin below jumbotron (default: 3.9375vw)
}

const Jumbotron = (props: JumboTronProps) => {
  const { titleOne, titleTwo, subTitle, height, image, bottomMargin } = props;

  // handle set background image logic
  let bgImage = image;
  if (!bgImage) {
    bgImage = "jumbotron-bg.png";
  }

  const heightCalc = height * 0.5625;
  const minDiffCalc = (100 - height) * 0.5625;
  const minHeightCalc = heightCalc - minDiffCalc;
  const bottomMarginCalc = bottomMargin ? bottomMargin : "3.9375vw"

  let sizeTitleOne = "18vw";
  let sizeTitleTwo = "18vw";
  let titleOneOffset = "0 0 0 -3vw";
  if (titleOne.length >= 10) {
    sizeTitleOne = "10vw";
    titleOneOffset = "0 0 0 4vw";
  } else if (titleOne.length >= 6) {
    sizeTitleOne = "13.5vw";
  }
  if (titleTwo.length >= 12) {
    sizeTitleTwo = "12vw";
  } else if (titleTwo.length >= 6) {
    sizeTitleTwo = "13.5vw";
  }

  return (
    <ComponentWrapper
      height={`${heightCalc}vw`}
      minHeight={`${minHeightCalc}vw`}
      maxHeight={`${height}vh`}
      justify="flex-end"
      margins={`0 0 ${bottomMarginCalc} 0`}
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.1)),url(/${bgImage})`,
        backgroundPosition: "bottom",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className={styles.middleDisplay}>
        <Display
          size={sizeTitleOne}
          margins={titleOneOffset}
          color={colors.ivory}
        >
          {titleOne}
        </Display>
        <Header
          size="2.3vw"
          color={colors.ivory}
          margins="6vw -1vw 0 0"
          line={1.2}
          width="34vw"
          self="center"
          mobSize="2vw"
        >
          {subTitle}
        </Header>
      </div>
      <Display
        size={sizeTitleTwo}
        self="flex-end"
        margins="0 3vw -3vw 0"
        color={colors.ivory}
      >
        {titleTwo}
      </Display>
    </ComponentWrapper>
  );
};

export default Jumbotron;
