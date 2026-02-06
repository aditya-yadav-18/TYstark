import { FaMusic, FaPlay } from "react-icons/fa";

const playlists = [
  { id: 1, title: "Chill Beats", tracks: 24 },
  { id: 2, title: "Workout Energy", tracks: 18 },
  { id: 3, title: "Coding Focus", tracks: 32 },
  { id: 4, title: "Late Night Vibes", tracks: 14 },
];

export default function Playlist() {
  return (
    <div className="p-6 max-w-3xl">
      {/* Header */}
      <h1 className="text-xl font-semibold text-white flex items-center gap-2 mb-6">
        <FaMusic /> Playlists
      </h1>

      {/* Playlist List */}
      <div className="space-y-4">
        {playlists.map((list) => (
          <div
            key={list.id}
            className="flex items-center justify-between bg-[#1f1d42] p-4 rounded-xl hover:shadow-md transition"
          >
            <div>
              <p className="font-medium text-white">{list.title}</p>
              <p className="text-xs text-gray-400">{list.tracks} tracks</p>
            </div>

            <button className="bg-pink-500 text-white p-3 rounded-full hover:bg-pink-600">
              <FaPlay />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
