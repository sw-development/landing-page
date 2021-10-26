import '@/../../styles/normalize.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>SW Development</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
