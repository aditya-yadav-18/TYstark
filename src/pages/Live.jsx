import { FaBroadcastTower, FaEye } from "react-icons/fa";

const liveStreams = [
  { id: 1, user: "Tech Talks", viewers: 1240 },
  { id: 2, user: "Gaming Arena", viewers: 980 },
  { id: 3, user: "Music Jam", viewers: 640 },
  { id: 4, user: "Startup Live", viewers: 410 },
];

export default function Live() {
  return (
    <div className="p-6">
      {/* Header */}
      <h1 className="text-xl font-semibold text-white flex items-center gap-2 mb-6">
        <FaBroadcastTower className="text-red-500" /> Live Now
      </h1>

      {/* Live Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {liveStreams.map((live) => (
          <div
            key={live.id}
            className="bg-[#1f1d42] rounded-xl overflow-hidden hover:shadow-lg transition"
          >
            {/* Thumbnail */}
            <div className="relative h-40 bg-black">
              <span className="absolute top-2 left-2 bg-red-500 text-xs px-2 py-1 rounded text-white">
                LIVE
              </span>
            </div>

            {/* Info */}
            <div className="p-3 text-white">
              <p className="font-medium">{live.user}</p>
              <p className="text-xs text-gray-400 flex items-center gap-1">
                <FaEye /> {live.viewers} watching
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
