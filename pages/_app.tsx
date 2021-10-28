import '@/../../styles/normalize.css';
import Head from 'next/head';
import { useTranslation } from '../hooks/useTranslation';

function MyApp({ Component, pageProps }) {
  const { dictionary } = useTranslation();
  return (
    <>
      <Head>
        <title>{dictionary.siteTitle}</title>
        <meta property="og:title" lang="pl" content={dictionary.siteTitle} />
        <meta property="og:title" lang="en-US" content={dictionary.siteTitle} />
        <meta name="twitter:title" lang="pl" content={dictionary.siteTitle} />
        <meta name="twitter:title" lang="en-US" content={dictionary.siteTitle} />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
