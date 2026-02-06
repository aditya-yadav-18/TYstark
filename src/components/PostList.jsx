import { useState } from "react";
import { FaThumbsUp, FaComment, FaShareAlt } from "react-icons/fa";

const PostList = ({ posts = [], showRightSidebarContent }) => {
  const [likedPosts, setLikedPosts] = useState({});

  const handleLikeToggle = (index) => {
    setLikedPosts((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="space-y-5">
      {posts.length === 0 ? (
        <p className="text-center text-gray-400">No posts to display</p>
      ) : (
        posts.map((post, index) => (
          <div
            key={index}
            className="bg-[#1f1d42] text-gray-200 rounded-xl p-4 shadow-lg"
          >
            {/* Header */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gray-600" />
              <p className="text-base">{post.comment}</p>
            </div>

            {/* Media */}
            <div className="mt-3">
              {post.postFile?.type.startsWith("image/") && (
                <img
                  src={URL.createObjectURL(post.postFile)}
                  alt="Post"
                  className="mx-auto w-1/2 max-w-[1300px] max-h-[600px] rounded-md object-contain transition-transform hover:scale-[1.02]"
                />
              )}

              {post.postFile?.type.startsWith("video/") && (
                <video
                  controls
                  src={URL.createObjectURL(post.postFile)}
                  className="mx-auto w-1/2 max-w-[1300px] max-h-[600px] rounded-md transition-transform hover:scale-[1.02]"
                />
              )}
            </div>

            {/* Actions */}
            <div className="flex justify-between items-center mt-4 pt-3 border-t border-gray-500">
              <button
                onClick={() => handleLikeToggle(index)}
                className={`flex items-center gap-2 text-sm transition ${
                  likedPosts[index]
                    ? "text-white bg-blue-600 px-3 py-1 rounded-md"
                    : "text-blue-400 hover:text-blue-500"
                }`}
              >
                <FaThumbsUp />
                {likedPosts[index] ? "Liked" : "Like"}
              </button>

              <button
                onClick={() => showRightSidebarContent("Comments", post)}
                className="flex items-center gap-2 text-sm text-pink-400 hover:text-pink-500 transition"
              >
                <FaComment />
                Comment
              </button>

              <button className="flex items-center gap-2 text-sm text-green-400 hover:text-green-500 transition">
                <FaShareAlt />
                Share
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default PostList;
