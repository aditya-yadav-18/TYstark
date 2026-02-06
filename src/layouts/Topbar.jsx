import { useState, useEffect, useRef } from "react";
import { useLocation, Link } from "react-router-dom";
import { FaBell, FaEllipsisV, FaCommentDots } from "react-icons/fa";

const Topbar = ({ showRightSidebarContent }) => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const isActive = (path) => location.pathname === path;

  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <nav className="w-[98%] mx-auto mb-2 px-4 py-2 rounded-lg text-white">
      <div className="flex font-sans text-sm  items-center justify-between w-full">
        {/* Left */}
        <div className="flex gap-6">
          {["/", "/trending", "/following"].map((path, i) => (
            <Link
              key={i}
              to={path}
              className={`font-medium text-sm transition ${
                isActive(path) ? "text-pink-400" : "hover:text-pink-400"
              }`}
            >
              {path === "/" ? "Home" : path.replace("/", "")}
            </Link>
          ))}
        </div>

        {/* Right */}
        <div className="flex items-center gap-2">
          {[FaBell, FaCommentDots].map((Icon, i) => (
            <button
              key={i}
              onClick={() =>
                showRightSidebarContent(i === 0 ? "Notification" : "Messages")
              }
              className="w-10 h-10 rounded-xl bg-[#1f1d42] flex items-center justify-center hover:bg-pink-500 transition"
            >
              <Icon />
            </button>
          ))}

          {/* Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-10 h-10 rounded-xl bg-[#1f1d42] flex items-center justify-center hover:bg-pink-500 transition"
            >
              <FaEllipsisV />
            </button>

            {isOpen && (
              <div className="absolute right-0 mt-4 w-40 z-50">
                {["Disable Account", "Archive", "About Us"].map((item) => (
                  <button
                    key={item}
                    className="w-full text-left px-4 py-2 mt-1 rounded-lg bg-[#1f1d42]/90 hover:bg-pink-500 transition"
                  >
                    {item}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Topbar;
