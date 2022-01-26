import Navigation from '@/../../components/Navigation/index';
import Hero from '@/../../components/Hero';
import Design from '@/../../components/Design';
import Develop from '@/../../components/Develop';
import React, { useEffect } from 'react';
import Services from '@/../../components/Services';
import Contact from '@/../../components/Contact';
import Business from '@/../../components/Business';
import Footer from '../components/Footer';
import Subscribe from '../components/Subscribe';
import Blog from '@/../../components/Blog';
import { GraphQLClient, gql } from 'graphql-request';
import { Post } from '../context/blogPosts/intefaces';
import { useBlogPosts } from '../context/blogPosts/blogPosts';
import { BlogPostActionTypes } from '../context/blogPosts/actions';

export async function getStaticProps() {
  const client = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPH_CMS_API, {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_GRAPH_CMS_TOKEN}`,
    },
  });

  const query = gql`
    query {
      blogPosts(first: 6) {
        id
        slug
        timestamp
        title
        description
        previewImg {
          url
        }
      }
    }
  `;

  const results: Post[] = await client.request(query);

  return {
    props: {
      results,
    },
  };
}

export default function Home({ results }: { results: Post[] }) {
  const { dispatch } = useBlogPosts();

  useEffect(() => {
    dispatch({ type: BlogPostActionTypes.SetList, payload: results });
  }, []);

  return (
    <>
      <Navigation />
      <Hero />
      <Services />
      <Design />
      <Develop />
      <Blog />
      <Business />
      <Subscribe />
      <Contact />
      <Footer />
    </>
  );
}
