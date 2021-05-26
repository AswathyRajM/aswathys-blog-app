import PostItem from "./post-item";
import classes from "./post-grid.module.css";

const PostGrid = ({ posts }) => {
  return (
    <ul className={classes.grid}>
      {posts.map((post) => (
        <PostItem post={post} key={post.slug} />
      ))}
    </ul>
  );
};

export default PostGrid;
