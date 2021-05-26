import Image from "next/image";
import ReactMarkDown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

import PostHeader from "./post-header";

import classes from "./post-content.module.css";

const PostContent = ({ post }) => {
  const imagePath = `/images/posts/${post.slug}`;

  const customRenderer = {
    // images are wrapped inside pagragph in markdown
    p(paragraph) {
      const { node } = paragraph;
      // check if the paragraph has an image as a child node
      if (node.children[0].tagName === "img") {
        // get the image from child node
        const image = node.children[0];

        return (
          <div className={classes.image}>
            <Image
              src={`${imagePath}/${image.properties.src}`}
              alt={image.alt}
              width={600}
              height={300}
            />
          </div>
        );
      } else return <p>{paragraph.children}</p>;
    },

    // code({ language, value }) {
    //   return (
    //     <SyntaxHighlighter
    //       style={atomDark}
    //       language={language}
    //       children={value}
    //     />
    //   );
    // },

    code(code) {
      const { className, children } = code;
      const match = /language-(\w+)/.exec(className || "");
      // const { language, value } = code;
      console.log(code);
      return (
        <SyntaxHighlighter
          style={atomDark}
          language={match[1]}
          children={String(children).replace(/\n$/, "")}
        />
      );
      return null;
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
