import AllPosts from "../../components/posts/all-posts";

const DUMMY_POSTS = [
  {
    title: "Getting started with nextjs1",
    date: "2021-05-26",
    excerpt:
      "Learn NextJS from the ground up and build production-ready, fullstack ReactJS apps with the NextJS framework!",
    image: "getting-started-nextjs.png",
    slug: "getting-started-with-nextjs1",
  },
  {
    title: "Getting started with nextjs2",
    date: "2021-05-26",
    excerpt:
      "Learn NextJS from the ground up and build production-ready, fullstack ReactJS apps with the NextJS framework!",
    image: "getting-started-nextjs.png",
    slug: "getting-started-with-nextjs2",
  },
  {
    title: "Getting started with nextjs3",
    date: "2021-05-26",
    excerpt:
      "Learn NextJS from the ground up and build production-ready, fullstack ReactJS apps with the NextJS framework!",
    image: "getting-started-nextjs.png",
    slug: "getting-started-with-nextjs3",
  },
  {
    title: "Getting started with nextjs4",
    date: "2021-05-26",
    excerpt:
      "Learn NextJS from the ground up and build production-ready, fullstack ReactJS apps with the NextJS framework!",
    image: "getting-started-nextjs.png",
    slug: "getting-started-with-nextjs4",
  },
  {
    title: "Getting started with nextjs5",
    date: "2021-05-26",
    excerpt:
      "Learn NextJS from the ground up and build production-ready, fullstack ReactJS apps with the NextJS framework!",
    image: "getting-started-nextjs.png",
    slug: "getting-started-with-nextjs5",
  },
];
export default function AllPostsPage() {
  return <AllPosts posts={DUMMY_POSTS} />;
}
