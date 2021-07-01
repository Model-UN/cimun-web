import { Display } from '../../styles/typography'
import { Wrapper, ComponentWrapper } from '../../styles/containers'
import HeaderNav from '../../components/headerNav'

const Conference = () => {
  return (
    <Wrapper>
      <HeaderNav />
      <ComponentWrapper height="48.375vw" minHeight="40.5vw" maxHeight="86vh" justify="flex-end" margins="0" style={{
        backgroundImage: "url(/jumbotron-bg.svg)", backgroundPosition: 'bottom', backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}>
        <Display margins="0 0 0 -3vw">
          CIMUN
        </Display>
        <Display self="flex-end" margins="0 3vw -3vw 0" size="16vw">
          Conference
        </Display>
      </ComponentWrapper>
    </Wrapper>
  )
}

export default Conference;