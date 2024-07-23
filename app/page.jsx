import Link from "next/link";
import Post from "./components/Post";
import prisma from "../lib/prisma";

async function getPosts() {
  const posts = await prisma.post.findMany({
    where: { published: true },
    include: {
      author: {
        select: { name: true },
      },
    },
  });
  return posts;
}

export default async function Home() {
  const posts = await getPosts();
  return (
    <main className="flex flex-col  items-center justify-center min-h-screen p-24">
      <h1 className="text-4xl  text-white font-bold mb-6">A Blog-Post App</h1>

      <Link
        href="/add-post"
        className="inline-flex h-12 py-8 px-10 animate-shimmer items-center justify-center rounded-md border my-4 border-purple-500 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] text-2xl font-medium text-purple-500 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
      >
        Add Post
      </Link>
      <h1 className="text-3xl text-white font-bold mb-8">Feed</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl">
        {posts.map((post) => (
          <Post
            key={post.id}
            id={post.id}
            title={post.title}
            content={post.content}
            authorName={post.author.name}
          />
        ))}
      </div>
    </main>
  );
}
