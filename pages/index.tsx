import Navigation from '@/../../components/Navigation/index';
import Hero from '@/../../components/Hero';
import Design from '@/../../components/Design';
import Develop from '@/../../components/Develop';
import React from 'react';
import Services from '@/../../components/Services';
import Contact from '@/../../components/Contact';
import Business from '@/../../components/Business';
import Footer from '../components/Footer';
import Subscribe from '../components/Subscribe';
import Blog from '@/../../components/Blog';
import { GraphQLClient, gql } from 'graphql-request';



export async function getStaticProps() {
  const client = new GraphQLClient(
    process.env.NEXT_PUBLIC_GRAPH_CMS_API,
    {
      headers: {
        Authorization:
        `Bearer ${process.env.NEXT_PUBLIC_GRAPH_CMS_TOKEN}`
      },
    }
  );

  const query = gql`
    query {
      blogPosts(first: 6) {
        slug
        timestamp
        title
        description
      }
    }
  `;

  const results = await client.request(query);

  return {
    props: {
      results,
    },
  };

}

export default function Home({ results }) {
  console.log(results);
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
