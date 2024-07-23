"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddPost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const router = useRouter();

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await fetch("/api/add-post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, content }),
      });

      router.refresh();
    } catch (error) {
      console.error(error);
    }

    setTitle("");
    setContent("");
  };

  return (
    <main className="flex border-purple-500  flex-col items-center justify-center min-h-screen">
      <Link href="/" className="mb-4 text-purple-500 hover:underline">
        View Feed
      </Link>
      <h1 className="text-3xl text-gray-200 font-bold mb-6">Add Post</h1>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-gray-50 p-20 rounded-xl shadow-2xl"
      >
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-gray-700 font-medium mb-2"
          >
            Title:
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
            required
            className="w-full px-16 py-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="content"
            className="block text-gray-700 font-medium mb-2"
          >
            Content:
          </label>
          <textarea
            id="content"
            value={content}
            onChange={handleContentChange}
            required
            className="w-full px-16 py-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-purple-500 text-white py-2 rounded hover:bg-purple-600 transition duration-200"
        >
          Submit
        </button>
      </form>
    </main>
  );
}
