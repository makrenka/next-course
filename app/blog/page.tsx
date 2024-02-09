import { Metadata } from "next";
import Link from "next/link";
import style from "./blog.module.css";

async function getData() {
  const resp = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      revalidate: 60,
    },
  });

  return resp.json();
}

export const metadata: Metadata = {
  title: "Next-course - blog",
};

export default async function Blog() {
  const posts = await getData();

  return (
    <>
      <h1>Blog page</h1>
      <ul className={style.list}>
        {posts.map((post: any) => (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`} className={style.link}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
