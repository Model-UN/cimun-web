import '../styles/globals.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons'

library.add(fab, fas, far);

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
