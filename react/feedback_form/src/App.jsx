import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FeedbackForm from "./components/Feedback";
import SubmittedFeedback from "./components/SubmittedFeedback";
import "./app.css"

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FeedbackForm />} />
        <Route path="/submitted-feedback" element={<SubmittedFeedback />} />
      </Routes>
    </Router>
  );
}
