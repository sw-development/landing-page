import React from 'react';
import { useRouter } from 'next/router';
import Navigation from '@/../../components/Navigation/index';
import Footer from '@/../../components/Footer';
import Subscribe from '@/../../components/Subscribe';
import PostContent from '@/../../components/Post/Post';
import { useBlogPosts } from '../../../context/blogPosts/blogPosts';

const Post = () => {
  const { slug } = useRouter().query;
  const { state } = useBlogPosts();

  console.log(state);
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
