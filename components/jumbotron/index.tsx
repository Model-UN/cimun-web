import { JSXElementConstructor } from 'react';
import styles from './Jumbotron.module.css'

const Jumbotron = () => {
  return (
    <div className={styles.display} style={{
      backgroundImage: "url(/jumbotron-bg.svg)", backgroundPosition: 'bottom', backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    }}>
      <div className={styles.middleDisplay}>
        <h1 className={styles.topDisplay}>
          CIMUN
      </h1>
        <h2 className={styles.subDisplay}>
          THE 18TH ANNUAL CHICAGO INTERNATIONAL MODEL UNITED NATIONS CONFERENCE
      </h2>
      </div>
      <h1 className={styles.bottomDisplay}>
        XVIII
    </h1>
    </div>
  )
}

export default Jumbotron;
