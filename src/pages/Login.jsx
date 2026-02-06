import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../context/auth";
import OverlayLoader from "../components/OverlayLoader";
export default function Login() {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    if (!name || !password) {
      setLoading(false);
      return alert("Please enter both username and password");
    }

    loginUser(name);
    setLoading(false);
    navigate("/", { replace: true });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {loading && <OverlayLoader />}
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-xl shadow-lg w-96"
      >
        <h2 className="text-xl font-semibold text-center mb-6">Login</h2>

        <input
          type="text"
          placeholder="Username"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full mb-4 p-3 border rounded-lg focus:ring-2 focus:ring-pink-500 outline-none"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-6 p-3 border rounded-lg focus:ring-2 focus:ring-pink-500 outline-none"
        />

        <button className="w-full bg-pink-500 text-white py-3 rounded-lg hover:bg-pink-600 transition">
          Login
        </button>
      </form>
    </div>
  );
}
