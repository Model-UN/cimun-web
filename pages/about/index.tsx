import { Wrapper, ComponentWrapper } from '../../styles/containers'
import HeaderNav from '../../components/headerNav'
import About from "../../components/articles/about";
import Jumbotron from "../../components/jumbotron";

const AboutPage = () => {
  return (
      <Wrapper>
        <HeaderNav />
        <Jumbotron
            titleOne="CIMUN"
            titleTwo="XIX"
            subTitle="THE 19TH ANNUAL CHICAGO INTERNATIONAL MODEL UNITED NATIONS CONFERENCE"
            height={85}
        />
        <About/>
      </Wrapper>
  )
}

export default AboutPage;
