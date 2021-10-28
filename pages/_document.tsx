import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';

type Props = {};

class Document extends NextDocument<Props> {
  render() {
    return (
      <Html>
        <Head>
          <meta
            name="description"
            lang="en-US"
            content="
SW Development is a company that creates websites, blogs, graphic designs, online stores and all kinds of software. If there is such a need, let's deal with the positioning of your website and its maintenance."
          />
          <meta
            name="description"
            lang="pl"
            content="SW Development to firma zajmująca się tworzeniem stron internetowych, blogów, projektów graficznych, sklepów internetowych oraz wszelkiego rodzaju oprogramowania. Jeżeli zaistnieje taka potrzeba to zajmiejmy się pozycjonowaniem Twojej strony oraz jej utrzymaniem."
          />
          <meta property='og:description' lang="pl" content="Firma zajmująca się tworzeniem stron internetowych, blogów, projektów graficznych, sklepów internetowych oraz wszelkiego rodzaju oprogramowania. Jeżeli zaistnieje taka potrzeba to zajmiejmy się pozycjonowaniem Twojej strony oraz jej utrzymaniem." />
          <meta property='og:description' lang="pl" content="Company that creates websites, blogs, graphic designs, online stores and all kinds of software. If there is such a need, let's deal with the positioning of your website and its maintenance." />
          <meta name='twitter:description' lang="pl" content="Firma zajmująca się tworzeniem stron internetowych, blogów, projektów graficznych, sklepów internetowych oraz wszelkiego rodzaju oprogramowania. Jeżeli zaistnieje taka potrzeba to zajmiejmy się pozycjonowaniem Twojej strony oraz jej utrzymaniem." />
          <meta name='twitter:description' lang="pl" content="Company that creates websites, blogs, graphic designs, online stores and all kinds of software. If there is such a need, let's deal with the positioning of your website and its maintenance." />
          <link rel="icon" href="/assets/favicon.png" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&display=swap"
            rel="stylesheet"
          />
          <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
          <link rel="icon" href="/favicon/favicon.ico" type="image/x-icon" />
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
