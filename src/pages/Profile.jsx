import { getUser, logoutUser } from "../context/auth";
import { useNavigate } from "react-router-dom";
import IMG from "../assets/logo.png";
import Aditya from "../assets/logo.png";

export default function Profile() {
  const user = getUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser();
    navigate("/login", { replace: true });
  };
  return (
    <div className="max-w-5xl mx-auto px-6 py-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row gap-8 items-center sm:items-start border-b pb-6">
        {/* Avatar */}
        <img
          src={Aditya}
          alt="Profile"
          className="w-32 h-32 rounded-full object-cover border-4 border-pink-500"
        />

        {/* Info */}
        <div className="flex-1 text-center sm:text-left">
          <h2 className="text-2xl text-white font-semibold">{user?.name}</h2>
          <p className="text-gray-500 text-sm">@{user?.name?.toLowerCase()}</p>

          {/* Stats */}
          <div className="flex justify-center sm:justify-start gap-6 mt-4">
            <div>
              <span className="font-semibold text-pink-500">120</span>
              <p className="text-sm text-pink-900">Posts</p>
            </div>
            <div>
              <span className="font-semibold text-pink-500">4.5k</span>
              <p className="text-sm text-pink-900">Followers</p>
            </div>
            <div>
              <span className="font-semibold text-pink-500">300</span>
              <p className="text-sm text-pink-900">Following</p>
            </div>
          </div>

          {/* Bio */}
          <p className="mt-4 text-sm text-white">
            ✨ MERN Stack Developer | Tech Enthusiast 🚀
          </p>
        </div>
      </div>
      <button
        onClick={handleLogout}
        className="mt-4 absolute top-0 right-0 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
      >
        Logout
      </button>
      {/* Gallery */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-6">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="overflow-hidden rounded-xl bg-gray-200 cursor-pointer"
          >
            <img
              src={IMG}
              alt="post"
              className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
