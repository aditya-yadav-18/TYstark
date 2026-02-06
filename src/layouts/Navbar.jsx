import { useState } from "react";
import {
  FaPaperPlane,
  FaPlusSquare,
  FaMicrophone,
  FaCamera,
  FaPenSquare,
} from "react-icons/fa";

const Navbar = ({ toggleModal, addPost }) => {
  const [thought, setThought] = useState("");

  const handlePostThought = () => {
    if (!thought.trim()) return alert("Please write something before posting!");
    addPost({ comment: thought, postFile: null, comments: [] });
    setThought("");
  };

  return (
    <nav className="w-[98%] mx-auto px-4 py-2 bg-[#1f1d42] rounded-lg text-white">
      <div className="flex items-center gap-3">
        {/* Textarea */}
        <div className="relative flex items-center flex-1 bg-[#12132d] rounded-lg px-3 h-10">
          <div className="absolute left-3 w-7 h-7 rounded-full border bg-center bg-cover bg-[url('/src/assets/images/profile.png')]" />

          <textarea
            value={thought}
            onChange={(e) => setThought(e.target.value)}
            rows={1}
            placeholder="What's on your mind?"
            className="flex-1 pl-12 bg-transparent outline-none resize-none text-white"
          />

          <ul className="flex gap-2">
            {[FaPlusSquare, FaCamera, FaMicrophone, FaPenSquare].map(
              (Icon, i) => (
                <button
                  key={i}
                  onClick={i === 0 ? toggleModal : undefined}
                  className="text-xl hover:text-pink-400 transition"
                >
                  <Icon />
                </button>
              ),
            )}
          </ul>
        </div>

        {/* Post */}
        <button
          onClick={handlePostThought}
          className="px-3 py-2 bg-pink-500 rounded-md hover:bg-pink-400 transition"
        >
          <FaPaperPlane />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
