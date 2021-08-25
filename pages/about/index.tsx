import { Display } from '../../styles/typography'
import { Wrapper, ComponentWrapper } from '../../styles/containers';
import Footer from '../../components/footer';
import HeaderNav from '../../components/headerNav';

const About = () => {
  return (
    <Wrapper>
      <HeaderNav />
      <ComponentWrapper
        height="48.375vw" minHeight="40.5vw" maxHeight="86vh" justify="flex-end" margins="0"
        style={{
        backgroundImage: "url(/jumbotron-bg.svg)",
        backgroundPosition: 'bottom',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}
      >
        <Display margins="0 0 0 -3vw" color="black">
          About
        </Display>
        <Display self="flex-end" margins="0 3vw -3vw 0" color="black">
          CIMUN
        </Display>
      </ComponentWrapper>
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
        <h2>Realism</h2>
        <p>
          The CIMUN philosophy is rooted in realism. We encourage delegates to demonstrate comprehensive knowledge of
          both their positions, as well as the international system as a whole. As a result, delegations are given the
          opportunity to work as a team in order to best promote their national interest, simulating the work of actual
          diplomats in a variety of forums – awards are not given for passing empty resolutions or compromising national
          policy.
        </p>
        <h2>Cross-Committee Integration</h2>
        <p>
          From the start of opening ceremonies, students are immediately introduced to a 24/7, fully integrated
          simulation. Delegates will be challenged to work across committees and find dynamic ways to confront the
          complex issues facing 21st century states. At CIMUN, all committees feature a fully-integrated crisis
          simulation that will force delegates to think on their feet and work across multiple committees. From the
          General Assemblies to our Historical Cabinets and Regional Bodies, all of our committees are vital
          participants in the crisis, constituting one of the largest integrated MUN simulations in the world.
        </p>
        <h2>Innovation</h2>
        <p>
          CIMUN's ambitious mission can only be achieved through constant innovation, masterfully designed and
          implemented by our diverse and talented team of passionate volunteers. Our student-run media gives students
          the chance to experience technology and the ever-changing news cycle throughout the conference.
        </p>
      </ComponentWrapper>
      <ComponentWrapper color="red">
        <h1>Secretary General Welcome</h1>
      </ComponentWrapper>
      <ComponentWrapper>
        <h1>Meet the Steering Committee</h1>
      </ComponentWrapper>
      <Footer />
    </Wrapper>
  )
}

export default About;
