import { Display } from '../../app/styles/typography'
import { Wrapper, ComponentWrapper } from '../../app/styles/containers'
import HeaderNav from '../../app/components/headerNav'

const About = () => {
  return (
    <Wrapper>
      <HeaderNav />
      <ComponentWrapper height="48.375vw" minHeight="40.5vw" maxHeight="86vh" justify="flex-end" margins="0" style={{
        backgroundImage: "url(/jumbotron-bg.svg)", backgroundPosition: 'bottom', backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}>
        <Display margins="0 0 0 -3vw">
          About
        </Display>
        <Display self="flex-end" margins="0 3vw -3vw 0">
          CIMUN
        </Display>
      </ComponentWrapper>
    </Wrapper>
  )
}

export default About;