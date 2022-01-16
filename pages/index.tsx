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

export default function Home() {
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
