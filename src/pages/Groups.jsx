import { FaUsers, FaPlus } from "react-icons/fa";

const groups = [
  { id: 1, name: "React Developers", members: 1240 },
  { id: 2, name: "UI/UX Designers", members: 860 },
  { id: 3, name: "Startup Founders", members: 430 },
  { id: 4, name: "Web3 Builders", members: 310 },
];

export default function Groups() {
  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-xl font-semibold text-white flex items-center gap-2">
          <FaUsers /> Groups
        </h1>
        <button className="flex items-center gap-2 bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600">
          <FaPlus /> Create Group
        </button>
      </div>

      {/* Groups List */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {groups.map((group) => (
          <div
            key={group.id}
            className="bg-[#1f1d42] text-white p-4 rounded-xl hover:shadow-lg transition"
          >
            <h3 className="font-semibold text-lg">{group.name}</h3>
            <p className="text-gray-400 text-sm mt-1">
              {group.members} members
            </p>
            <button className="mt-3 text-sm text-pink-400 hover:underline">
              View Group
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
