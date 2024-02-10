export const getAllPosts = async () => {
  const resp = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!resp.ok) {
    throw new Error("Unable to fatch posts");
  }

  return resp.json();
};

export const getPostsBySearch = async (search: string) => {
  const resp = await fetch(
    `https://jsonplaceholder.typicode.com/posts?q=${search}`
  );

  if (!resp.ok) {
    throw new Error("Unable to fatch posts");
  }

  return resp.json();
};
