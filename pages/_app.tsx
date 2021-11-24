import React from 'react';
import '_app/styles/base/globals.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import type { AppProps } from 'next/app';

library.add(fab, fas, far);

// This linting hint is required, as this is literally boilerplate code
// where pageProps is literally of "Any" type
//
// eslint-disable-next-line react/jsx-props-no-spreading
const App = ({ Component, pageProps }: AppProps): JSX.Element => <Component {...pageProps} />;
export default App;
