import { Wrapper, ComponentWrapper } from '../../styles/containers'
import HeaderNav from '../../components/headerNav'
import About from "../../components/articles/about";
import {Display} from "../../styles/typography";

const AboutPage = () => {
  return (
      <Wrapper>
        <HeaderNav />
        <ComponentWrapper height="48.375vw" minHeight="40.5vw" maxHeight="86vh" justify="flex-end" margins="0" style={{
          backgroundImage: "url(/jumbotron-bg.svg)", backgroundPosition: 'bottom', backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}>
          <About/>
        </ComponentWrapper>
      </Wrapper>
  )
}

export default AboutPage;
