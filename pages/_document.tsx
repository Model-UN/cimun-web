import React from 'react';
import Document, {
  DocumentContext, Html, Head, Main, NextScript, DocumentInitialProps,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    // Configure styled-components for NextJS
    try {
      ctx.renderPage = () => originalRenderPage({
        // Unfortunately, this is an unavoidable suppression, as the
        // prop spreading is required for NextJS/styled-components to do
        // whatever magic they do behind the scenes.
        // eslint-disable-next-line react/jsx-props-no-spreading
        enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
      });
      const initialProps = await Document.getInitialProps(ctx);

      /** Suppression of JetBrains IDEs' inspection warning for Title element
      * requirements in Head components, as NextJS explicitly states that
      * Document Head components should not have titles. Rather, only the
      * next/head Head component requires a title.
      *
      * For more information, see @next/next/no-title-in-document-head:
      * https://nextjs.org/docs/messages/no-title-in-document-head
      */

      // noinspection HtmlRequiredTitleElement
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <link
            href="https://fonts.googleapis.com/css2?family=Alegreya+Sans:ital,wght@0,500;1,500&family=Alegreya:ital,wght@0,600;1,600&family=Mulish:ital,wght@0,900;1,900&family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
