import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

function SignIn() {
  const navigate = useNavigate();
  const [user, setUser] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleSignIn = () => {
    axios
      .post("http://localhost:8989/api/users/signin", user)
      .then((res) => {
        if (res.data.ok) {
          // console.log("Token:", res.data.token);
          // Save token if needed
          navigate("/home"); // Navigate to home or dashboard
          toast.success("Signed in successfully!");
        } else {
          setError(res.data.message || "Login failed");
          toast.error(res.data.message || "Login failed");
        }
      })
      .catch(() => {
        const message = error.response?.data?.message || "Something went wrong!";
        setError(message);
        toast.error(message);
      });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-xl rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-700">
          Sign In
        </h2>
        {error && (
          <p className="text-red-500 text-sm mb-4 text-center">{error}</p>
        )}
        <input
          type="email"
          placeholder="Email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          className="w-full p-3 mb-4 border rounded-md outline-blue-500"
        />
        <input
          type="password"
          placeholder="Password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          className="w-full p-3 mb-6 border rounded-md outline-blue-500"
        />
        <button
          onClick={handleSignIn}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md font-semibold transition"
        >
          Sign In
        </button>

        {/* Signup Redirect Button */}
        <p className="mt-6 text-center text-sm text-gray-600">
          Don't have an account?
          <button
            onClick={() => navigate("/signup")}
            className="text-blue-600 ml-2 hover:underline font-medium"
          >
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
}

export default SignIn;
