import { Title } from "../infoColumns/infoColumns.styles";
import { Body, SubTitle } from "../../styles/typography";
import { MaterialCard } from "../../app/components/elements";
import { colors } from "../../styles/colors";

const About = () => {
  return (
    <MaterialCard flexdirection="column" $noAnimate background={colors.ivory}>
      <Title margins="2vw 6rem 0 6rem" line={0.9} align={"center"}>
        About the Chicago International Model United Nations
      </Title>
      <br />
      <Body
        margins="2rem 6rem 0.5rem 6rem"
        mobmargins="0 1rem 0 1rem"
        line={1.4}
        align={"justify"}
        size="1.5rem"
      >
        The <strong>Chicago International Model United Nations</strong>, also
        known as CIMUN, is a groundbreaking educational political simulation for
        high school students. Our conference is characterized by its immersive
        nature, realism and fun. Our staff is dedicated to the mission of
        providing a conference that covers the most realistic and relevant
        themes in international politics and ensures they are explored through
        challenging debate.
        <br />
        <br />
      </Body>
      <SubTitle
        margins="0rem 6rem 0rem 6rem"
        mobmargins="0 1rem 0 1rem"
        align={"center"}
      >
        OUR MISSION
      </SubTitle>
      <Body
        margins="2rem 6rem 0.5rem 6rem"
        mobmargins="0 1rem 0 1rem"
        line={1.4}
        align={"justify"}
        size="1.5rem"
      >
        The <strong>Model United Nations Development Organization</strong>{" "}
        (MUNDO) is an independent educational organization that has been
        producing high quality, simulation-driven Model UN programs since 2003
        in both Chicago and Mexico City. We seek to help students build their
        understanding of global politics through realistic, fast-paced
        experiential education programs that promote critical thinking and
        leadership development.
        <br />
        <br />
      </Body>
      <SubTitle
        margins="0rem 6rem 0rem 6rem"
        mobmargins="0 1rem 0 1rem"
        align={"center"}
      >
        WHY CIMUN?
      </SubTitle>
      <Body
        margins="0rem 6rem 0.5rem 6rem"
        mobmargins="0 1rem 0 1rem"
        line={1.4}
        align={"justify"}
        size="1.5rem"
      >
        <br />
        <strong>REALISM</strong>
        <br />
        The CIMUN philosophy is rooted in <em>realism</em>. We encourage
        delegates to demonstrate comprehensive knowledge of both their positions
        and the international system as a whole. As a result, delegations are
        given the opportunity to negotiate in order to best promote their
        national interest, simulating the work of actual diplomats in a variety
        of forums&mdash;awards are not given for passing empty resolutions or
        compromising national policy.
        <br />
        <br />
        <strong>CROSS-COMMITTEE INTEGRATION</strong>
        <br />
        From the start of opening ceremonies, students are immediately
        introduced to a <em>24/7, fully integrated simulation</em>. Delegates
        will be challenged to work across committees and find dynamic ways to
        confront the complex issues facing 21st century states. At CIMUN, all
        committees feature a fully-integrated crisis simulation that will force
        delegates to think on their feet and work across multiple committees.
        From the General Assembly to our Parliamentary Cabinets and Regional
        Bodies, all of our committees are vital participants in the crisis,
        constituting one of the largest integrated MUN simulations in the world.
        <br />
        <br />
        <strong>INNOVATION</strong>
        <br />
        CIMUN's ambitious mission can only be achieved through{" "}
        <em>constant innovation</em>, masterfully designed and implemented by
        our diverse and talented team of passionate volunteers. For example, our
        student-run media gives students the chance to experience technology and
        the ever-changing news cycle throughout the conference by publishing
        their own articles as a part of the simulation, using both traditional
        media formats and social media.
        <br />
        <br />
      </Body>
    </MaterialCard>
  );
};

export default About;
