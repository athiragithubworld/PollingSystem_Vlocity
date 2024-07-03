
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CreatePoll from "./Components/CreatePoll";
import VotePoll from "./Components/VotePoll";
import PollResults from "./Components/PollResults";
import Comments from "./Components/Comment";


const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <header className="bg-black text-white p-4 flex flex-wrap justify-between items-center fixed top-0 w-full z-10">
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
           
          </nav>
        </header>
        <main className="mt-20 overflow-y-auto p-4">
          <Routes>
            <Route path="/create" element={<CreatePoll />} />
            <Route path="/vote" element={<VotePoll />} />
            <Route path="/results" element={<PollResults />} />
            <Route path="/comments/:pollId" element={<Comments />} />
           
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;

