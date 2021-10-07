import Head from 'next/head';
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

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navigation />
      <Hero />
      <Services />
      <Design />
      <Develop />
      <Business />
      <Subscribe />
      <Contact />
      <Footer />
    </>
  );
}
