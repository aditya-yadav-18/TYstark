import { useState } from "react";
import { FaSearch, FaHeart, FaComment } from "react-icons/fa";
const explorePosts = Array.from({ length: 18 }).map((_, i) => ({
  id: i,
  image: `https://picsum.photos/500/500?random=${i + 10}`,
  likes: Math.floor(Math.random() * 1000),
  comments: Math.floor(Math.random() * 200),
}));

export default function Explore() {
  const [query, setQuery] = useState("");

  return (
    <div className="px-6 py-4">
      <div className="sticky top-0 z-10 pb-4">
        <div className="relative max-w-3xl mx-auto">
          <input
            type="text"
            placeholder="Search people, posts, tags..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="
              w-full px-12 py-3 rounded-xl
              bg-[#1f1d42] text-white
              placeholder-gray-400
              focus:outline-none focus:ring-2 focus:ring-pink-500
            "
          />
          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
        </div>
      </div>

      {/* 🧱 Explore Grid */}
      <div
        className="
          mt-6 grid gap-3
          grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5
        "
      >
        {explorePosts.map((post) => (
          <div
            key={post.id}
            className="
              relative group overflow-hidden rounded-xl
              bg-black cursor-pointer
            "
          >
            {/* Image */}
            <img
              src={post.image}
              alt="explore"
              className="
                w-full h-full object-cover
                transition-transform duration-300
                group-hover:scale-110
              "
            />

            {/* Hover Overlay */}
            <div
              className="
                absolute inset-0 bg-black/50
                opacity-0 group-hover:opacity-100
                transition flex items-center justify-center gap-6
                text-white text-sm font-medium
              "
            >
              <div className="flex items-center gap-2">
                <FaHeart className="text-pink-500" />
                {post.likes}
              </div>
              <div className="flex items-center gap-2">
                <FaComment />
                {post.comments}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
