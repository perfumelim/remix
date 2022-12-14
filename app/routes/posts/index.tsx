import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { getPosts } from "~/models/post.server";

type LoaderData = {
  posts: Awaited<ReturnType<typeof getPosts>>;
};

export const loader = async () => {
  return json<LoaderData>({
    posts: await getPosts(),
  });
};

export default function Posts() {
  const { posts } = useLoaderData() as LoaderData;

  return (
    <main className="flex h-screen w-screen flex-col items-center bg-whiteish pt-16">
      <h1 className="text-4xl">Posts</h1>
      <Link to="admin" className="text-red-600">
        Admin
      </Link>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link to={post.slug} className="text-customGreen-600">
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
