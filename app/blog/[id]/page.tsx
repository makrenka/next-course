import { Metadata } from "next";
import style from "./post.module.css";

type Props = {
  params: {
    id: string;
  };
};

async function getData(id: string) {
  const resp = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: {
      revalidate: 60,
    },
  });

  return resp.json();
}

export async function generateMetadata({
  params: { id },
}: Props): Promise<Metadata> {
  const post = await getData(id);

  return {
    title: `Next-course ${post.title}`,
  };
}

export default async function Post({ params: { id } }: Props) {
  const post = await getData(id);

  return (
    <>
      <h1>{post.title}</h1>
      <p className={style.postBody}>{post.body}</p>
    </>
  );
}
