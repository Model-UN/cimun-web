import Link from "next/link";
import { Title } from "../../components/infoColumns/infoColumns.styles";
import { Body } from "../../styles/typography";
import { MaterialCard } from "./elements";
import { colors } from "../../styles/colors";

const StaffApp = () => {
  return (
    <MaterialCard flexdirection="column" $noAnimate background={colors.ivory}>
      <Title margins="2vw 6rem 0 6rem" align="center" line={0.9}>
        Apply to staff CIMUN XX!
      </Title>
      <br />
      <Body
        line={1.4}
        size="1.25rem"
        align="justify"
        margins="2rem 6rem 0.5rem 6rem"
        $mobMargins="0 1rem 0 1rem"
      >
        CIMUN staff consists of a multitude of working professionals as well as
        college students. Despite being in many different career fields, our
        staff shares a love for Model UN and the ability to create an immersive
        experience for students.
        <br />
        <br />
        <strong>
          Please fill out the following google form if interested:
        </strong>
      </Body>
      <Body
        size="1.75rem"
        self="center"
        margins="2rem 6rem 0.5rem 6rem"
        $mobMargins="0 1rem 0 1rem"
      >
        <Link href="https://docs.google.com/forms/d/e/1FAIpQLSeOb1NQDFuQ-L4I-Bz9s8muxruEGPzbVzAMdZPTXpORUhySdQ/viewform?usp=sf_link">
          <u>Staff Application</u>
        </Link>
      </Body>
      <Body
        line={1.4}
        size="1.25rem"
        align="justify"
        margins="2rem 6rem 0.5rem 6rem"
        $mobMargins="0 1rem 0 1rem"
      >
        <strong>Returning staff:</strong> if you are interested in a director or
        other specially-appointed position, please fill out the following form:
      </Body>
      <Body
        size="1.75rem"
        self="center"
        margins="2rem 6rem 0.5rem 6rem"
        $mobMargins="0 1rem 0 1rem"
      >
        <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdSTioqDcE7yhfDKNbEV4-z0HNbiGq2fzFP7d7TBFestn7dSA/viewform?usp=sf_link">
          <u>Director Application</u>
        </Link>
      </Body>
    </MaterialCard>
  );
};

export default StaffApp;
