import { Title } from "../infoColumns/infoColumns.styles";
import { Body } from "../../styles/typography";
import { ComponentWrapper } from "../../styles/containers";
import { MaterialCard } from "../../app/components/elements";
import { colors } from "../../styles/colors";

export default function Letter(): JSX.Element {
  return (
    <ComponentWrapper data-nosnippet margins={"auto"} pad={"0 12rem 0 12rem"}>
      <MaterialCard column noAnimate background={colors.ivory}>
        <Title margins="2vw 8rem 0 8rem" line={0.9} align={"center"}>
          From the Office of the Secretary-General
        </Title>
        <Body
          margins="0 8rem 0.5rem 8rem"
          mobMargins="0 1rem 0 1rem"
          line={1.4}
          align={"justify"}
          size="1.5rem"
        >
          <br /><br />
          Dear Delegates, Faculty, and Distinguished Guests:
          <br /><br />
          It is our distinct pleasure to welcome you to the twentieth annual{" "}
          <strong>Chicago International Model United Nations (CIMUN)</strong>,
          held December 7th – 10th, 2023!
          <br /><br />
          As one of the nation’s largest independent conferences, CIMUN is
          staffed by a diverse and talented team of students, post-graduates,
          and professionals from over 50 colleges and universities, selected
          through a highly-competitive application process. Close to 80% of our
          staff are returning delegates from previous CIMUN conferences, and we
          urge all those who are interested in joining our team to apply at the
          link on our website. CIMUN also offers one of the lowest
          staff-to-delegate ratios of any major conference, with one staff
          member for every seven delegates!
          <br /><br />
          It is easier to argue for the way things should be, rather than how
          they actually are. Every day, the world becomes a more divisive and
          tougher place to call home. We struggle to understand why people take
          the actions they do, and how people react to those actions. We often
          find ourselves feeling helpless, powerless, faithless. CIMUN
          challenges delegates to recognize those emotions, assume these roles
          of power, and portray them in a productive and realistic manner.
          <br /><br />
          Without having the capacity to understand the problems we face, it is
          impossible to solve them. Leaders across the globe are met with
          difficult and multifaceted issues daily, and we will urge all
          delegates to explore every side of the issues as they progress through
          our crisis simulations. By thinking on your feet and collaborating
          with neighboring committees, the result is an unconventional
          conference that immerses students in a global context, and makes CIMUN
          a truly one-of-a-kind Model UN experience.
          <br /><br />
          CIMUN XX will offer 20 unique committees and cabinets, most with 40
          delegates or less. The historical year of 1962 will immerse delegates
          in a scenario that requires innovation and originality, as decisions
          they will make can alter geographical and political power for
          generations to come. CIMUN implements delegate’s decisions in
          real-time, allowing them to see the impact of their actions, and
          requiring them to think critically beyond the bounds of any one topic
          to best represent their national interests.
          <br /><br />
          I could not be more excited to welcome you in 2023!
          <br /><br />
          Sincerely,
          <br />
          Harris Laufer
          <br />
          Secretary-General, CIMUN XX
          <br /><br />
        </Body>
      </MaterialCard>
    </ComponentWrapper>
  );
}
