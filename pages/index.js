import { Fragment } from "react";
import Head from "next/head";
import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";

import { getFeaturedPosts } from "../util/posts.util";

export default function HomePage({ posts }) {
  return (
    <Fragment>
      <Head>
        <title>Aswathy's Blog</title>
        <meta
          name="description"
          content="Blog about programming and web development"
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();
  return {
    props: {
      posts: featuredPosts,
    },
    revalidate: 1800,
  };
}
