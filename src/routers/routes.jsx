import { JobDetails } from "../components/JobDetails";
import { JobList } from "../components/JobList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export function MyRoutes() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<JobList />} />
        <Route exact path="/jobs" element={<JobList />} />
        <Route exact path="/jobs/:position" element={<JobDetails />} />
      </Routes>
    </Router>
  );
}
