import React from 'react';
import Navigation from '@/../../components/Navigation/index';
import Footer from '@/../../components/Footer';
import Subscribe from '@/../../components/Subscribe';
import PostContent from '@/../../components/Post/Post';
import { useBlogPosts } from '../../../context/blogPosts/blogPosts';
import { GraphQLClient, gql } from 'graphql-request';
import { Post as PostModel } from '../../../context/blogPosts/intefaces';
import { NextPageContext } from 'next';

interface ComponentProps {
  result: PostModel;
}

const Post = (props: ComponentProps) => {
  console.log(props);
  return (
    <>
      <Navigation />
      <PostContent />
      <Subscribe />
      <Footer />
    </>
  );
};

Post.getInitialProps = async (context: NextPageContext) => {
  const client = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPH_CMS_API, {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_GRAPH_CMS_TOKEN}`,
    },
  });

  const query = gql`
    query($slug: String!) {
      bLOGPOST(where: {slug: $slug}) {
        id
        title
        slug
        description
        previewImg {
          url
        }
      }
    }
  `;

  const variables = {
    slug: context.query.slug
  }

  const { bLOGPOST } = await client.request(query, variables);

  return {
    props: {
      result: bLOGPOST
    },
  };
};

export default Post;
