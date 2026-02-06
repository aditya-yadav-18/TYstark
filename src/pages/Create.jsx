import { useState } from "react";
import { FaImage, FaPaperPlane } from "react-icons/fa";

export default function Create() {
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState(null);

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) setImage(URL.createObjectURL(file));
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-xl font-semibold mb-6">Create Post</h1>

      {/* Image Preview */}
      <div className="w-full h-64 bg-gray-200 rounded-xl flex items-center justify-center mb-4 overflow-hidden">
        {image ? (
          <img
            src={image}
            alt="preview"
            className="w-full h-full object-cover"
          />
        ) : (
          <FaImage className="text-5xl text-gray-400" />
        )}
      </div>

      {/* Caption */}
      <textarea
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
        placeholder="Write a caption..."
        className="w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-pink-500 resize-none mb-4"
        rows={3}
      />

      {/* Actions */}
      <div className="flex justify-between items-center">
        <label className="cursor-pointer flex items-center gap-2 text-pink-600">
          <FaImage />
          <span>Add Image</span>
          <input type="file" hidden onChange={handleImage} />
        </label>

        <button className="flex items-center gap-2 bg-pink-500 text-white px-5 py-2 rounded-lg hover:bg-pink-600">
          <FaPaperPlane />
          Post
        </button>
      </div>
    </div>
  );
}
