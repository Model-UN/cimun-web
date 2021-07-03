import { Display, Header } from '../../styles/typography'
import { ComponentWrapper } from '../../styles/containers'
import styles from './Jumbotron.module.css'

const Jumbotron = () => {
  return (
    <ComponentWrapper height="48.375vw" minHeight="40.5vw" maxHeight="86vh" justify="flex-end" margins="0" style={{
      backgroundImage: "linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.1)),url(/jumbotron-bg.png)", backgroundPosition: 'bottom', backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    }}>
      <div className={styles.middleDisplay}>
        <Display margins="0 0 0 -3vw">
          CIMUN
        </Display>
        <Header size="2.3vw" color="white" margins="6vw -1vw 0 0" line={1.20} width="34vw" self="center">
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
