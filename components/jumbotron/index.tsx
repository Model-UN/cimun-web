import { Display, Header } from '../../styles/typography'
import { ComponentWrapper } from '../../styles/containers'
import styles from './Jumbotron.module.css'

const Jumbotron = () => {
  return (
    <ComponentWrapper height="48.375vw" minHeight="40.5vw" maxHeight="86vh" justify="flex-end" margins="0" style={{
      backgroundImage: "url(/jumbotron-bg.svg)", backgroundPosition: 'bottom', backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    }}>
      <div className={styles.middleDisplay}>
        <Display margins="0 0 0 -3vw">
          CIMUN
        </Display>
        <Header color="white" margins="0 1vw 0 3vw" line={1.25} width="32vw" self="center">
          THE 18TH ANNUAL CHICAGO INTERNATIONAL MODEL UNITED NATIONS CONFERENCE
        </Header>
      </div>
      <Display self="flex-end" margins="0 3vw -3vw 0">
        XVIII
      </Display>
    </ComponentWrapper>
  )
}

export default Jumbotron;
