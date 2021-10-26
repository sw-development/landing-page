import NextDocument, { Html, Head, Main, NextScript} from 'next/document';
import React from 'react';

type Props = {};

class Document extends NextDocument<Props> {
  render() {
    return (
      <Html>
        <Head>
          <link
            rel="preconnect"
            href="https://fonts.googleapis.com"
            as="font"
            crossOrigin="true"
          />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            as="font"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;600&display=swap"
            rel="stylesheet"
            as="font"
            crossOrigin="true"
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

export default Document;
