import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Explore from "../pages/Explore";
import Profile from "../pages/Profile";
import SavedItems from "../pages/SavedItems";
import FindFriend from "../pages/FindFriend";
import Groups from "../pages/Groups";
import Live from "../pages/Live";
import Mediapage from "../pages/Mediapage";
import Playlist from "../pages/PlayList";
import Create from "../pages/Create";
import { Navigate } from "react-router-dom";
import Login from "../pages/Login";
import ProtectedRoute from "./ProtectedRoute";
export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        element={
          <ProtectedRoute>
            <MainLayout />
          </ProtectedRoute>
        }
      >
        <Route path="/" element={<Home />} />
        <Route path="explore" element={<Explore />} />
        <Route path="create" element={<Create />} />
        <Route path="profile" element={<Profile />} />
        <Route path="saved-items" element={<SavedItems />} />
        <Route path="find-friend" element={<FindFriend />} />
        <Route path="groups" element={<Groups />} />
        <Route path="/live" element={<Live />} />
        <Route path="/pages" element={<Mediapage />} />
        <Route path="/playlist" element={<Playlist />} />
      </Route>
    </Routes>
  );
}
