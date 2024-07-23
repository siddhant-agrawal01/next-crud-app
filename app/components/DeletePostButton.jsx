"use client";
import { useRouter } from "next/navigation";

export default function DeletePostButton({ postId }) {
  const router = useRouter();

  async function handleClick() {
    try {
      await fetch(`/api/post/${postId}`, {
        method: "DELETE",
      });
      router.refresh();
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <button
      onClick={handleClick}
      className="px-8 py-2 rounded-full bg-red-500 text-white font-bold transition duration-200 hover:bg-white hover:text-red-500 border-2 border-transparent hover:border-red-500"
    >
      Delete
    </button>
  );
}
