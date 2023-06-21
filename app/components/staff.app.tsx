import { Title } from "../../components/infoColumns/infoColumns.styles";
import { Body, SubTitle } from "../../styles/typography";
import { MaterialCard } from "../../app/components/elements";
import { colors } from "../../styles/colors";
import Link from "next/link";

const StaffApp = () => {
  return (
    <MaterialCard flexdirection="column" noanimate background={colors.ivory}>
      <Title margins="2vw 6rem 0 6rem" line={0.9} align={"center"}>
        Apply to staff CIMUN XX!
      </Title>
      <br />
      <Body
        margins="2rem 6rem 0.5rem 6rem"
        mobmargins="0 1rem 0 1rem"
        line={1.4}
        align={"justify"}
        size="1.25rem"
      >
        CIMUN staff consists of a multitude of working professionals as well as
        college students. Despite being in many different career fields, our
        staff shares a love for Model UN and the ability to create an immersive
        experience for students.
        <br />
        <br></br>
        <strong>
          Please fill out the following google form if interested:
        </strong>
        <Link href="https://docs.google.com/forms/d/e/1FAIpQLSeOb1NQDFuQ-L4I-Bz9s8muxruEGPzbVzAMdZPTXpORUhySdQ/viewform?usp=sf_link">
          <Body size="1.75rem" align={"center"}>
            <u>Staff Application</u>
          </Body>
        </Link>
        <strong>Returning staff:</strong> if you are interested in a director or
        other specially-appointed position, please fill out the following form:
        <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdSTioqDcE7yhfDKNbEV4-z0HNbiGq2fzFP7d7TBFestn7dSA/viewform?usp=sf_link">
          <Body size="1.75rem" align={"center"}>
            <u>Director Application</u>
          </Body>
        </Link>
      </Body>
    </MaterialCard>
  );
};

export default StaffApp;
