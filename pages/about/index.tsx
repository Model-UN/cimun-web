import React from "react";
import { Wrapper, ComponentWrapper } from '../../styles/containers';
import Footer from '../../components/footer';
import HeaderNav from '../../components/headerNav';
import Card from "../../components/card";
import Jumbotron from "../../components/jumbotron";

const About = () => {
  return (
    <Wrapper>
      <HeaderNav />
      <Jumbotron
        titleOne="ABOUT"
        titleTwo="CIMUN"
        height={65}
        image="student-banquet.jpeg"
      />
      <ComponentWrapper>
        <h1>WHAT IS CIMUN?</h1>
        <p>
          CIMUN is a groundbreaking educational political simulation for high school students held February 3-6, 2022.
          Our conference is characterized by its immersive nature, realism and fun. Since 2003, we’ve worked carefully
          to provide a conference that not only covers the most realistic and relevant themes in international politics,
          but also ensures they are explored through innovative ways within debate.
        </p>
        <h2>OUR MISSION</h2>
        <p>
          The Model United Nations Development Organization is an independent educational organization that has been
          producing high quality, simulation-driven Model UN programs since 2004, including our flagship conferences:
          The Chicago and Mexico City International Model United Nations. We seek to help students build their
          understanding of global politics through realistic, fast-paced experiential education programs that promote
          critical thinking and leadership development.
        </p>
      </ComponentWrapper>
      <ComponentWrapper>
        <h1>WHY CIMUN?</h1>
        <Card
          title={'Realism'}
          body={
            'The CIMUN philosophy is rooted in realism. We encourage delegates to demonstrate comprehensive knowledge of\n' +
            'both their positions, as well as the international system as a whole. As a result, delegations are given the\n' +
            'opportunity to work as a team in order to best promote their national interest, simulating the work of actual\n' +
            'diplomats in a variety of forums – awards are not given for passing empty resolutions or compromising national\n' +
            'policy.'
          }
        />
        <Card
          title={'Cross-Committee Integration'}
          body={
            'From the start of opening ceremonies, students are immediately introduced to a 24/7, fully integrated\n' +
            'simulation. Delegates will be challenged to work across committees and find dynamic ways to confront the\n' +
            'complex issues facing 21st century states. At CIMUN, all committees feature a fully-integrated crisis\n' +
            'simulation that will force delegates to think on their feet and work across multiple committees. From the\n' +
            'General Assemblies to our Historical Cabinets and Regional Bodies, all of our committees are vital\n' +
            'participants in the crisis, constituting one of the largest integrated MUN simulations in the world.'
          }
        />
        <Card
          title={'Innovation'}
          body={
            'CIMUN\'s ambitious mission can only be achieved through constant innovation, masterfully designed and\n' +
            'implemented by our diverse and talented team of passionate volunteers. Our student-run media gives students\n' +
            'the chance to experience technology and the ever-changing news cycle throughout the conference.'
          }
        />
      </ComponentWrapper>
      <ComponentWrapper color="red">
        <h1>Secretary General Welcome</h1>

        Dear Delegates, Faculty, and Distinguished Guests:
        <br/>
        It is our distinct pleasure to welcome you to the eighteenth annual Chicago International Model United Nations (CIMUN), held February 3rd-6th, at the Palmer House Hilton Chicago. The Palmer House has been an icon of downtown Chicago for over 150 years, and we are eager to begin a new chapter at this historic location. This will be the first CIMUN held in person since December 2019, and we are striving to create a safe, healthy, and educational conference for all those who attend. For those who do not feel comfortable attending in person, we will offer various virtual options the same weekend as well.
        <br/>
        As one of the nation’s largest independent conferences, CIMUN is staffed by a diverse and talented team of students, post-graduates, and professionals from over 50 colleges and universities, selected through a highly-competitive application process. Close to 80% of our staff are returning delegates from previous CIMUN conferences, and we urge all those who are interested in joining our team to apply at the link on our website. CIMUN also offers one of the lowest staff-to-delegate ratios of any major conference, with one staff member for every seven delegates.
        <br/>
        CIMUN is different from any other conference delegates will attend, and we are proud of it. We focus on realistic portrayals of policy; how to innovate within the world we live in. Our primary goal is to provide an accurate representation of real-world diplomats to challenge delegates through crisis simulations. Delegates will be urged to think on their feet and work with neighboring committees to tackle arduous international issues. The result is an unconventional conference that immerses students in a global context, and makes CIMUN a truly one-of-a-kind Model UN experience.
        <br/>
        CIMUN XVIII will offer 20 unique committees and cabinets, most with 15 delegates or less. The historical year of 1950 will immerse delegates in a scenario that requires innovation and originality, as decisions they will make can alter geographical and political power for generations to come. CIMUN implements delegate’s decisions in real-time, allowing them to see the impact of their actions, and requiring them to think critically beyond the bounds of any one topic to best represent their national interests.
        <br/>
        We could not be more excited to welcome you in 2022, and we hope you enjoy your stay in the great city of Chicago.
        <br/>

        Sincerely,
        Daniel Benson
        Secretary General

      </ComponentWrapper>
      <Footer />
    </Wrapper>
  )
}

export default About;
