import React from 'react';
import { useRouter } from 'next/router';
import Navigation from '@/../../components/Navigation/index';
import Footer from '@/../../components/Footer';
import Subscribe from '@/../../components/Subscribe';
import PostContent from '@/../../components/Post/Post';

const Post = () => {
  const { slug } = useRouter().query;
  return (
    <>
      <Navigation />
      <PostContent />
      <Subscribe />
      <Footer />
    </>
  );
};

export default Post;
