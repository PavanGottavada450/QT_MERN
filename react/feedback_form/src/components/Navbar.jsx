import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-500 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-xl font-bold">Feedback App</h1>
        <div className="space-x-4">
          <Link to="/" className="text-white hover:underline">Feedback Form</Link>
          <Link to="/submitted-feedback" className="text-white hover:underline">Submitted Feedback</Link>
        </div>
      </div>
    </nav>
  );
}
