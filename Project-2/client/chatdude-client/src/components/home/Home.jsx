import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-tr from-purple-600 via-pink-500 to-red-500 flex flex-col items-center justify-center text-white p-6">
      <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fadeIn drop-shadow-lg">
        Welcome to ChatDude 💬
      </h1>
      <p className="text-lg md:text-xl mb-8 text-white/90">
        Connect instantly. Chat seamlessly. Your new chat hub.
      </p>

      <div className="flex flex-wrap gap-4">
        <button
          onClick={() => navigate("/chat")}
          className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-gray-100 transition-all duration-300"
        >
          Start Chatting
        </button>
        <button
          onClick={() => navigate("/profile")}
          className="bg-white text-pink-600 px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-gray-100 transition-all duration-300"
        >
          View Profile
        </button>
      </div>

      <div className="mt-12 text-sm opacity-80">
        <p>Built with ❤️ using React + Tailwind CSS</p>
        <p className="mt-1">© 2025 ChatDude Inc.</p>
      </div>
    </div>
  );
}

export default Home;
