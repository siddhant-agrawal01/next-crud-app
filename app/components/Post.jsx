
import Link from "next/link";
import DeletePostButton from "./DeletePostButton";



export default function Post({ id, title, content, authorName }) {
  return (
    <div className="flex border-purple-500 flex-col justify-between border p-4 sm:p-6 mb-4 sm:mb-6 rounded-lg shadow-2xl bg-white w-full">
      <div>
        <h3 className="text-base sm:text-lg font-semibold text-gray-700 mb-1 sm:mb-2">
          {authorName}
        </h3>
        <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-4">{title}</h4>
        <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">{content}</p>
      </div>
      <div className="flex flex-col sm:flex-row justify-end space-y-2 sm:space-y-0 sm:space-x-4 mt-3 sm:mt-4">
        <Link
          href={`/update-post/${id}`}
          className="px-3 sm:px-4 py-1 sm:py-2 rounded-full bg-purple-500 text-white font-bold text-sm sm:text-base transition duration-200 hover:bg-white hover:text-purple-500 border-2 border-transparent hover:border-purple-500 text-center"
        >
          Edit
        </Link>
        <DeletePostButton postId={id} />
      </div>
    </div>
  );
}


