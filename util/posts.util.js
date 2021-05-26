import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postDirectory = path.join(process.cwd(), "posts-content");

export function getDirectory() {
  return fs.readdirSync(postDirectory);
}

export function getFileContent(fileIdentifier) {
  // removes the file extention
  const postSlug = fileIdentifier.replace(/\.md$/, "");
  const filePath = path.join(postDirectory, `${postSlug}.md`);

  // read content from file which has meta data and content itself in a string format
  const fileContent = fs.readFileSync(filePath, "utf-8");

  // matter will extract content and metadata as data
  const { data, content } = matter(fileContent);

  return {
    slug: postSlug,
    ...data,
    content,
  };
}

export function getAllPosts() {
  // read files from directory synchronously NOT the file content
  const postFiles = getDirectory();

  const allPosts = postFiles.map((postFile) => {
    return getFileContent(postFile);
  });
  const sortedPost = allPosts.sort((postA, postB) =>
    postA.date > postB ? -1 : 1
  );
  return sortedPost;
}

export function getFeaturedPosts() {
  const allPosts = getAllPosts();
  const featuredPosts = allPosts.filter((post) => post.isFeatured);
  return featuredPosts;
}
