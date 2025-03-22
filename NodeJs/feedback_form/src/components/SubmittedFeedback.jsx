import { useEffect, useState } from "react";
import Navbar from "./Navbar";

export default function SubmittedFeedback() {
  const [feedbackData, setFeedbackData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8989/getdata")
      .then((response) => response.json())
      .then((data) => {
        if (data.ok) {
          setFeedbackData(data.result);
        } else {
          setError("Error fetching feedback data.");
        }
        setLoading(false);
      })
      .catch((err) => {
        setError("Server error. Please try again later.");
        console.log(err);
        
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-6">
        <h2 className="text-2xl font-bold mb-4">Submitted Feedback</h2>
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}
        {!loading && !error && feedbackData.length === 0 && <p>No feedback submitted yet.</p>}
        {!loading && !error && feedbackData.length > 0 && (
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 p-2">Name</th>
                <th className="border border-gray-300 p-2">Email</th>
                <th className="border border-gray-300 p-2">Feedback</th>
              </tr>
            </thead>
            <tbody>
              {feedbackData.map((item, index) => (
                <tr key={index} className="border border-gray-300">
                  <td className="border border-gray-300 p-2">{item.name}</td>
                  <td className="border border-gray-300 p-2">{item.email}</td>
                  <td className="border border-gray-300 p-2">{item.feedback}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
