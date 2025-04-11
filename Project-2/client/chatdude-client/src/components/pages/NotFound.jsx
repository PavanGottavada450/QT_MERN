import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 to-gray-700 text-white text-center">
      <h1 className="text-9xl font-extrabold tracking-widest">404</h1>
      <p className="text-2xl font-semibold mt-4">Oops! Page Not Found</p>
      <p className="mt-2 text-gray-300">
        The page you're looking for doesn't exist or has been moved.
      </p>

      <Link
        to="/home"
        className="mt-6 px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300"
      >
        Go Back Home
      </Link>
    </div>
  );
}

export default NotFound;
