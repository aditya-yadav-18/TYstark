import { FaTimes } from "react-icons/fa";

export default function RightSidebar({ isOpen, title, onClose }) {
  return (
    <aside
      className={`
        fixed top-0 right-0 h-screen w-80 bg-[#12132d] text-white
        transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "translate-x-full"}
        z-[999]
      `}
    >
      {/* Header */}
      <div className="h-14 flex items-center justify-between px-4 border-b border-gray-700">
        <h2 className="text-lg font-semibold">{title}</h2>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-white transition"
        >
          <FaTimes />
        </button>
      </div>

      {/* Content */}
      <div className="p-4 text-gray-300">
        {title === "Settings" && (
          <div className="space-y-4">
            <SettingItem label="Dark Mode" />
            <SettingItem label="Privacy" />
            <SettingItem label="Notifications" />
            <SettingItem label="Account" />
          </div>
        )}
      </div>
    </aside>
  );
}

function SettingItem({ label }) {
  return (
    <div className="p-3 rounded-lg bg-[#1f1d42] hover:bg-indigo-500 transition cursor-pointer">
      {label}
    </div>
  );
}
