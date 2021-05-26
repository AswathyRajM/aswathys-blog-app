import Image from "next/image";
import ReactMarkDown from "react-markdown";
import PostHeader from "./post-header";

import classes from "./post-content.module.css";

const PostContent = ({ post }) => {
  const imagePath = `/images/posts/${post.slug}`;

  const customRenderer = {
    img(image) {
      return (
        <Image
          src={`${imagePath}/${image.src}`}
          alt={image.alt}
          width={600}
          height={300}
        />
      );
    },
  };
  return (
    <article className={classes.content}>
      <PostHeader image={`${imagePath}/${post.image}`} title={post.title} />
      <ReactMarkDown components={customRenderer}>{post.content}</ReactMarkDown>
    </article>
  );
};

export default PostContent;
