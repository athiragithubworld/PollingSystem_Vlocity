
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CreatePoll from "./Components/CreatePoll";
import VotePoll from "./Components/VotePoll";
import PollResults from "./Components/PollResults";
import Comments from "./Components/Comment";
import UserProfile from "./Components/UserProfile";

const App = () => {
  return (
    <Router>
      <div className="bg-white min-h-screen ">
        <header className="bg-black text-white p-4 flex flex-wrap justify-between items-center">
          <h1 className="font-bold text-4xl flex-shrink-0">Polling System</h1>
          <nav className="mt-2 md:mt-0 flex gap-4 flex-wrap">
            <Link to="/create" className="mr-4 hover:underline">
              Create Poll
            </Link>
            <Link to="/vote" className="mr-4 hover:underline">
              Vote in Poll
            </Link>
            <Link to="/results" className="mr-4 hover:underline">
              Poll Results
            </Link>
            <Link to="/profile/123" className="mr-4 hover:underline">
              User Profile
            </Link>
          </nav>
        </header>
        <main className=" ">
          <Routes>
            <Route path="/create" element={<CreatePoll />} />
            <Route path="/vote" element={<VotePoll />} />
            <Route path="/results" element={<PollResults />} />
            <Route path="/comments/:pollId" element={<Comments />} />
            <Route path="/profile/:userId" element={<UserProfile />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;

