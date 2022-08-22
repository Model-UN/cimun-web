import {Title} from "../infoColumns/infoColumns.styles";
import {Body, SubTitle} from "../../styles/typography";
import {MaterialCard} from "../../app/components/elements";

export default function About(): JSX.Element {
  return (<MaterialCard column noAnimate>
        <Title margins="2vw 5rem 0 5rem" line={ 0.9 } align={ "center" }>
          About the Chicago International Model United Nations
        </Title>
        <Body margins="2rem 6rem 0.5rem 6rem" mobMargins="0 1rem 0 1rem"
              line={ 1.4 } align={ "justify" }>
          CIMUN is a groundbreaking educational political simulation for high
            school students held in-person February 2-5, 2023. Our conference is
            characterized by its immersive nature, realism and fun. Since 2003,
            we’ve worked carefully to provide a conference that not only covers
            the most realistic and relevant themes in international politics,
            but also ensures they are explored through innovative ways within
            debate.
          <br/>
          <br/>
        </Body>
        <SubTitle margins="0rem 6rem 0rem 6rem" mobMargins="0 1rem 0 1rem"
                  align={ "center" }>
          OUR MISSION
        </SubTitle>
        <Body margins="2rem 6rem 0rem 6rem" mobMargins="0 1rem 0 1rem"
              line={ 1.4 } align={ "justify" }>
          The Model United Nations Development Organization is an independent
          educational organization that has been producing high quality,
          simulation-driven Model UN programs since 2003, including our
          flagship conferences: The Chicago and Mexico City International
          Model United Nations. We seek to help students build their
          understanding of global politics through realistic, fast-paced
          experiential education programs that promote critical thinking and
          leadership development.
          <br/>
          <br/>
        </Body>
        <SubTitle margins="0rem 6rem 0rem 6rem" mobMargins="0 1rem 0 1rem"
                  align={ "center" }>
          WHY CIMUN?
        </SubTitle>
        <Body margins="0 6rem 0.5rem 6rem" mobMargins="0 1rem 0 1rem"
              line={ 1.4 } align={ "justify" }>
          <br/>
          <strong>Realism</strong>
          <br/>
          The CIMUN philosophy is rooted in realism. We encourage delegates
            to demonstrate comprehensive knowledge of both their positions, as
            well as the international system as a whole. As a result,
            delegations are given the opportunity to work as a team in order to
            best promote their national interest, simulating the work of actual
            diplomats in a variety of forums – awards are not given for passing
            empty resolutions or compromising national policy.
          <br/>
          <br/>
          <strong>Cross-Committee Integration</strong>
          <br/>
          From the start of opening ceremonies, students are immediately
            introduced to a 24/7, fully integrated simulation. Delegates will be
            challenged to work across committees and find dynamic ways to
            confront the complex issues facing 21st century states. At CIMUN,
            all committees feature a fully-integrated crisis simulation that
            will force delegates to think on their feet and work across multiple
            committees. From the General Assemblies to our Historical Cabinets
            and Regional Bodies, all of our committees are vital participants in
            the crisis, constituting one of the largest integrated MUN
            simulations in the world.
          <br/>
          <br/>
          <strong>Innovation</strong>
          <br/>
          CIMUN's ambitious mission can only be achieved through constant
            innovation, masterfully designed and implemented by our diverse and
            talented team of passionate volunteers. Our student-run media gives
            students the chance to experience technology and the ever-changing
            news cycle throughout the conference.
          <br/>
          <br/>
        </Body>
      </MaterialCard>)
}
