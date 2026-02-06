import { useState } from "react";
import { FaTimes, FaUpload, FaPaperclip } from "react-icons/fa";

const PostFormModal = ({ toggleModal, isModalOpen, addPost }) => {
  const [comment, setComment] = useState("");
  const [postFile, setPostFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!comment || !postFile) return;

    addPost({ comment, postFile });
    setComment("");
    setPostFile(null);
    toggleModal();
  };

  return (
    <div
      className={`fixed inset-0 z-[1001] flex items-center justify-center bg-black/70 transition-opacity ${
        isModalOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <div className="relative bg-[#12132d] w-[500px] max-w-[90%] max-h-[500px] p-5 rounded-lg shadow-[0_4px_8px_rgba(241,120,247,0.69)] overflow-y-auto">
        {/* Close */}
        <button
          onClick={toggleModal}
          className="absolute top-3 right-3 text-gray-300 hover:text-red-500 transition"
        >
          <FaTimes />
        </button>

        <h2 className="text-center text-gray-200 text-xl mb-5">
          Create a New Post
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Textarea */}
          <textarea
            placeholder="What's on your mind?"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-lg bg-gray-200 text-gray-800 resize-y outline-none border-2 border-gray-300 focus:border-blue-400 focus:shadow-md transition"
          />

          {/* File Upload */}
          <div className="flex items-center gap-3 border-2 border-dashed border-cyan-400 bg-[#1e1e2e] p-3 rounded-lg w-fit hover:bg-[#292943] transition">
            <input
              id="file-input"
              type="file"
              className="hidden"
              onChange={(e) => setPostFile(e.target.files[0])}
              required
            />

            <label
              htmlFor="file-input"
              className="flex items-center gap-2 text-white cursor-pointer"
            >
              <FaPaperclip className="text-cyan-400 text-xl transition-transform hover:scale-110" />
              Choose file
            </label>

            <span className="text-gray-300 text-sm italic">
              {postFile ? postFile.name : "No file chosen"}
            </span>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="mt-4 w-full flex justify-center items-center gap-2 bg-pink-500 hover:bg-pink-400 text-white py-2 rounded-md transition"
          >
            <FaUpload />
            Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default PostFormModal;
