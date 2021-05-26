import PostContent from "../../components/posts/post-detail/post-content";
import { getDirectory, getFileContent } from "../../util/posts.util";

export default function PostDetailPage({ post }) {
  return <PostContent post={post} />;
}

export function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;

  const post = getFileContent(slug);

  return {
    props: {
      post: post,
    },
    revalidate: 600,
  };
}

export function getStaticPaths() {
  const postFileNames = getDirectory();
  const slugs = postFileNames.map((fileName) => {
    return fileName.replace(/\.md$/, "");
  });
  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };

  // the above code is good for a site contianing  1000s code posts
  // return {
  //   paths: [],
  //   fallback: "blocking",
  // };
}
