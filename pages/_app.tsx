import '@/../../styles/normalize.css';
import Head from 'next/head';
import { BlogPostsProvider } from '../context/blogPosts/blogPosts';
import { useTranslation } from '../hooks/useTranslation';

function MyApp({ Component, pageProps }) {
  const { dictionary } = useTranslation();
  return (
    <>
      <Head>
        <title>{dictionary.siteTitle}</title>
        <meta name="description" content={dictionary.siteDescription} />
        <meta property="og:title" content={dictionary.socialMediaTitle} />
        <meta
          property="og:description"
          content={dictionary.socialMediaDescription}
        />
        <meta property="og:image" content={dictionary.facebookImage} />
        <meta name="twitter:title" content={dictionary.socialMediaTitle} />
        <meta name="twitter:description" content={dictionary.twitterImage} />
        <meta name="twitter:image" content="/assets/twitter-image.jpg" />
        <meta
          name="google-site-verification"
          content="UUnejpC-YAZJJQVu2EpS120SOlVNgW9pbwBcW4E50FI"
        />
      </Head>
      <BlogPostsProvider>
        <Component {...pageProps} />
      </BlogPostsProvider>
    </>
  );
}

export default MyApp;
