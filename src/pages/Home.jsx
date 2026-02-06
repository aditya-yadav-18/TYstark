import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import PostList from "../components/PostList";
import Navbar from "../layouts/Navbar";
import Stories from "../layouts/Stories";
import PostFormModal from "../components/PostFormModal";
import Topbar from "../layouts/Topbar";

function Home() {
  const { showRightSidebarContent } = useOutletContext();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posts, setPosts] = useState([]);

  const toggleModal = () => setIsModalOpen((p) => !p);
  const addPost = (newPost) => setPosts((p) => [...p, newPost]);

  return (
    <div className="relative pt-2 pb-10 space-y-6">
      <Topbar showRightSidebarContent={showRightSidebarContent} />
      <Stories />
      <Navbar toggleModal={toggleModal} />

      <PostList
        posts={posts}
        showRightSidebarContent={showRightSidebarContent}
      />

      <PostFormModal
        toggleModal={toggleModal}
        isModalOpen={isModalOpen}
        addPost={addPost}
      />
    </div>
  );
}

export default Home;
