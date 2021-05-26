import ReactMarkDown from "react-markdown";
import PostHeader from "./post-header";

import classes from "./post-content.module.css";

const DUMMY_POST = {
  title: "Getting started with nextjs1",
  date: "2021-05-26",
  image: "getting-started-nextjs.png",
  slug: "getting-started-with-nextjs1",
  content: "# This is a first post",
};
const PostContent = () => {
  const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;

  return (
    <article className={classes.content}>
      <PostHeader image={imagePath} title={DUMMY_POST.title} />
      <ReactMarkDown>{DUMMY_POST.content}</ReactMarkDown>
    </article>
  );
};

export default PostContent;
