"use client";
import Link from "next/link";
import style from "./posts.module.css";
import useSWR from "swr";
import { getAllPosts } from "@/app/services/getPosts";
// import { usePosts } from "@/app/store";
// import { shallow } from "zustand/shallow";
// import { useEffect } from "react";

const Posts = () => {
  const { data: posts, isLoading } = useSWR("posts", getAllPosts);
  //   const [posts, loading, getAllPosts] = usePosts(
  //     (state) => [state.posts, state.loading, state.getAllPosts],
  //     shallow
  //   );

  //   useEffect(() => {
  //     getAllPosts();
  //   }, [getAllPosts]);

  return isLoading ? (
    <h3>Loading...</h3>
  ) : (
    <ul className={style.list}>
      {posts.map((post: any) => (
        <li key={post.id}>
          <Link href={`/blog/${post.id}`} className={style.link}>
            {post.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export { Posts };
