import Head from "next/head";
import { Fragment } from "react";
import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../util/posts.util";

export default function AllPostsPage({ posts }) {
  return (
    <Fragment>
      <Head>
        <title>All posts</title>
        <meta
          name="description"
          content="A lis of all programming related tutorials and posts"
        />
      </Head>
      <AllPosts posts={posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const allPosts = getAllPosts();
  return {
    props: {
      posts: allPosts,
    },
  };
}
