import { FaPhotoVideo } from "react-icons/fa";

const mediaItems = Array.from({ length: 12 }).map((_, i) => ({
  id: i,
  type: i % 4 === 0 ? "video" : "image",
  src: `https://picsum.photos/500/500?random=${i + 50}`,
}));

export default function Media() {
  return (
    <div className="p-6">
      {/* Header */}
      <h1 className="text-xl font-semibold text-white flex items-center gap-2 mb-6">
        <FaPhotoVideo /> Media
      </h1>

      {/* Media Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {mediaItems.map((item) => (
          <div
            key={item.id}
            className="relative rounded-xl overflow-hidden bg-black"
          >
            <img
              src={item.src}
              alt="media"
              className="w-full h-full object-cover hover:scale-105 transition"
            />

            {item.type === "video" && (
              <span className="absolute top-2 right-2 bg-black/60 text-xs px-2 py-1 rounded text-white">
                ▶ Video
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
