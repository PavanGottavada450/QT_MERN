import { useState } from "react";
import Navbar from "./Navbar";

export default function FeedbackForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    feedback: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("Submitting...");

    try {
      const response = await fetch("http://localhost:8989/newdata", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.ok) {
        setMessage("✅ Feedback submitted successfully!");
        setFormData({ name: "", email: "", feedback: "" });
      } else {
        setMessage("❌ Error submitting feedback. Please try again.");
      }
    } catch (error) {
      setMessage("⚠️ Server error. Please try again later.");
      console.error(error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md p-6 bg-white shadow-lg rounded-lg">
          <h2 className="text-xl font-semibold text-center mb-4">Feedback Form</h2>
          {message && <p className="text-center text-sm text-green-600">{message}</p>}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full p-2 border rounded"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full p-2 border rounded"
              required
            />
            <textarea
              name="feedback"
              value={formData.feedback}
              onChange={handleChange}
              placeholder="Enter your feedback"
              className="w-full p-2 border rounded"
              rows="4"
              required
            ></textarea>
            <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
