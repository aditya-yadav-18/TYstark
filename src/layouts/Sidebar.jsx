import { Link, useLocation } from "react-router-dom";
import {
  FaCog,
  FaPlus,
  FaHome,
  FaUserCircle,
  FaCompass,
  FaBroadcastTower,
  FaUsers,
  FaFileAlt,
  FaHeadphones,
  FaStar,
  FaUserPlus,
} from "react-icons/fa";
import { getUser } from "../context/auth";
import IMG from "../assets/logo.png";
export default function Sidebar({ isOpen, showRightSidebarContent }) {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  const user = getUser();
  const navItemBase =
    "flex items-center h-11 px-3 rounded-lg transition-colors duration-200";

  const navItemState = (path) =>
    isActive(path)
      ? "bg-pink-100 text-pink-600 font-semibold border-l-4 border-pink-600"
      : "text-gray-400  hover:text-pink-600";

  const labelStyle = `
    ml-3 text-sm font-medium whitespace-nowrap
    transition-all duration-200
    ${isOpen ? "opacity-100 w-auto" : "opacity-0 w-0 overflow-hidden"}
  `;

  return (
    <aside
      className={`
        fixed top-0 left-0 h-screen bg-[#1f1d42] text-white
        transition-[width] duration-300 ease-in-out
        ${isOpen ? "w-64" : "w-16"}
      `}
    >
      {/* Profile */}
      <Link to="/profile">
        <div className="mt-6 mb-8 px-3">
          <div className="flex items-center h-12 bg-[#12132d] rounded-xl">
            <img
              src={IMG}
              alt="TY"
              className="w-10 h-10 rounded-lg border border-gray-500"
            />

            {/* Profile Text */}
            <div
              className={`
                ml-3 transition-all duration-200
                ${isOpen ? "opacity-100 w-auto" : "opacity-0 w-0 overflow-hidden"}
              `}
            >
              <p className="text-sm font-heading font-semibold text-pink-500">
                {user?.name || "Guest"}
              </p>
              <span className="text-xs text-yellow-400">Creator</span>
            </div>
          </div>
        </div>
      </Link>

      {/* Navigation */}
      <div className="flex flex-col h-[calc(100%-120px)] px-2">
        {/* Top */}
        <div className="space-y-1">
          <NavItem to="/" icon={<FaHome />} label="Home" />
          <NavItem to="/create" icon={<FaPlus />} label="Create" />
          <NavItem to="/explore" icon={<FaCompass />} label="Explore" />
          <NavItem to="/pages" icon={<FaFileAlt />} label="Pages" />
          <NavItem to="/groups" icon={<FaUsers />} label="Groups" />
          <NavItem
            to="/find-friend"
            icon={<FaUserPlus />}
            label="Find Friend"
          />
          <NavItem to="/live" icon={<FaBroadcastTower />} label="Live" />
          <NavItem to="/playlist" icon={<FaHeadphones />} label="PlayList" />
          <NavItem to="/saved-items" icon={<FaStar />} label="Saved Items" />
          <NavItem to="/profile" icon={<FaUserCircle />} label="Profile" />

          <button
            onClick={() => showRightSidebarContent("Settings")}
            className={`${navItemBase} text-gray-400  hover:text-pink-600`}
          >
            <span className="w-6 flex justify-center text-lg">
              <FaCog />
            </span>
            <span className={labelStyle}>Setting</span>
          </button>
        </div>
      </div>
    </aside>
  );

  /* NavItem Component */
  function NavItem({ to, icon, label }) {
    return (
      <Link to={to}>
        <div className={`${navItemBase} ${navItemState(to)}`}>
          <span className="w-6 flex justify-center text-lg">{icon}</span>
          <span className={labelStyle}>{label}</span>
        </div>
      </Link>
    );
  }
}
