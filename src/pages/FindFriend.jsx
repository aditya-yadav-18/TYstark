import { FaUserPlus, FaSearch } from "react-icons/fa";

const users = [
  { id: 1, name: "Virat Kohli", mutual: 12 },
  { id: 2, name: "Sidharth Malhotra", mutual: 5 },
  { id: 3, name: "Alia Bhatt", mutual: 8 },
  { id: 4, name: "Rohit Sharma", mutual: 3 },
];

export default function FindFriend() {
  return (
    <div className="p-6">
      {/* Search */}
      <div className="relative max-w-xl mb-6">
        <input
          placeholder="Search people..."
          className="
            w-full px-10 py-3 rounded-xl
            bg-[#1f1d42] text-white
            placeholder-gray-400
            focus:outline-none focus:ring-2 focus:ring-pink-500
          "
        />
        <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
      </div>

      {/* Users */}
      <div className="space-y-4 max-w-xl">
        {users.map((user) => (
          <div
            key={user.id}
            className="flex items-center justify-between bg-[#1f1d42] p-4 rounded-xl"
          >
            <div>
              <p className="font-medium text-white">{user.name}</p>
              <p className="text-xs text-gray-400">
                {user.mutual} mutual friends
              </p>
            </div>
            <button className="flex items-center gap-2 text-sm bg-pink-500 px-3 py-1.5 rounded-lg hover:bg-pink-600 text-white">
              <FaUserPlus /> Add
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
