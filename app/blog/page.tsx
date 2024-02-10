import { Posts } from "@/components/Posts";
import { PostSearch } from "@/components/PosrSearch";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next-course - Blog",
};

export default function Blog() {
  return (
    <>
      <h1>Blog page</h1>
      <PostSearch />
      {<Posts />}
    </>
  );
}
