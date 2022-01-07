import Link from 'next/link'
import {
  CardWrapper, InfoColumnWrapper, Title
} from "./infoColumns.styles";
import {Body} from "../../styles/typography";
import {MaterialCard} from "../../app/components/elements";

export default function LetterElement(): JSX.Element {
  return (
    <InfoColumnWrapper id="letter">
      <CardWrapper flex="1" margins="1rem 15% 0 15%" pad="auto">
        <MaterialCard column noAnimate>
          <Title margins="1rem 0 0 6rem" line={0.9}>From the Desk of the Secretary-General</Title>
          <Body margins="2rem 6rem 2rem 6rem" mobMargins="1rem 1rem 0 1rem" size="1.1rem" line={1.4} align={"justify"}>
            <em><strong>Delegates, Faculty, and Distinguished Guests:</strong></em>
            <br/><br/>
            It is our distinct pleasure to welcome you to the <strong> eighteenth annual
            Chicago International Model United Nations</strong> (CIMUN), held {" "}
            <em>February 4<sup>th</sup> - 6<sup>th</sup></em>. We will be holding this
            conference <em>virtually</em> for the 2<sup>nd</sup> time, allowing us to
            build further upon the immersive and engaging virtual experience from last
            year.
            <br/><br/>
            As one of the nation’s largest independent conferences, CIMUN is staffed by a
            diverse and talented team of students, post-graduates, and professionals from
            over 50 colleges and universities, selected through a highly-competitive
            application process. Nearly 80% of our staff are returning delegates from
            previous CIMUN conferences, and we urge all those who are interested in joining
            our team to apply <Link href="/staff-apps"><a>here</a></Link>. CIMUN also offers
            one of the lowest staff-to-delegate ratios of any major conference, with one
            staff member for every seven delegates.
            <br/><br/>
            CIMUN is different from any other conference delegates will attend, and we are
            proud of it. We focus on realistic portrayals of policy; how to innovate within
            the world we live in. Our primary goal is to provide an accurate representation
            of real-world diplomats to challenge delegates through crisis simulations.
            Delegates will be urged to think on their feet and work with neighboring
            committees to tackle arduous international issues. The result is an
            unconventional conference that immerses students in a global context, and makes
            CIMUN a truly one-of-a-kind Model UN experience.
            <br/><br/>
            CIMUN XVIII features 20 unique committees and cabinets, each consisting of 40
            delegates or fewer. The historical year of 1950 will immerse delegates in a
            scenario that requires innovation and originality, as decisions they will make
            can alter geographical and political power for generations to come. CIMUN
            implements delegates' decisions in real-time, allowing them to see the impact
            of their actions, and requiring them to think critically beyond the bounds of
            any one topic to best represent their national interests.
            <br/><br/>
            We could not be more excited to welcome you in 2022, and we look forward to
            revolutionizing the way we participate in debate!
            <br/><br/>
            Sincerely,
            <br/><br/>
            Daniel Benson
            <br/>
            Secretary-General, CIMUN XVIII
          </Body>
      </MaterialCard>
    </CardWrapper>
  </InfoColumnWrapper>)
}
