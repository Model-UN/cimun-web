import "../styles/globals.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { StyleSheetManager } from "styled-components";
import isPropValid from "@emotion/is-prop-valid";
import Layout from "./layout";

library.add(fab, fas, far);

const MyApp = ({ Component, pageProps }) => {
  return (
    <StyleSheetManager shouldForwardProp={isPropValid}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StyleSheetManager>
  );
};

export default MyApp;
