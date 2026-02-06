import { FaBookmark } from "react-icons/fa";

const savedPosts = Array.from({ length: 8 }).map((_, i) => ({
  id: i,
  image: `https://picsum.photos/400/400?random=${i + 30}`,
}));

export default function SavedItems() {
  return (
    <div className="p-6">
      {/* Header */}
      <h1 className="text-xl font-semibold text-white flex items-center gap-2 mb-6">
        <FaBookmark /> Saved Items
      </h1>

      {/* Saved Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {savedPosts.map((post) => (
          <div key={post.id} className="overflow-hidden rounded-xl bg-black">
            <img
              src={post.image}
              alt="saved"
              className="w-full h-full object-cover hover:scale-105 transition"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
