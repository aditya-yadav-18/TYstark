import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import RightSidebar from "./RightSidebar";

export default function MainLayout() {
  const [isLeftOpen, setIsLeftOpen] = useState(true);
  const [rightSidebar, setRightSidebar] = useState({
    isOpen: false,
    title: "",
  });

  const openRightSidebar = (title, payload = null) => {
    setRightSidebar({ isOpen: true, title, payload });
  };

  const closeRightSidebar = () => {
    setRightSidebar({ isOpen: false, title: "", payload: null });
  };

  return (
    <div className="flex min-h-screen overflow-hidden">
      <Sidebar isOpen={isLeftOpen} showRightSidebarContent={openRightSidebar} />

      {/* Main Content */}
      <main
        className={`
          flex-1 transition-all duration-300 overflow-y-auto
          ${isLeftOpen ? "ml-64" : "ml-16"}
        `}
      >
        <Outlet context={{ showRightSidebarContent: openRightSidebar }} />
      </main>

      <RightSidebar
        isOpen={rightSidebar.isOpen}
        title={rightSidebar.title}
        payload={rightSidebar.payload}
        onClose={closeRightSidebar}
      />
    </div>
  );
}
