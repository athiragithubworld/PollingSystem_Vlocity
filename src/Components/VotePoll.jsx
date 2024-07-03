
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const VotePoll = () => {
  const [polls, setPolls] = useState([]);
  const [selectedPoll, setSelectedPoll] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    const fetchPolls = async () => {
      const response = await axios.get("http://localhost:5000/polls");
      setPolls(response.data);
    };
    fetchPolls();
  }, []);

  const vote = async (pollId, optionIndex) => {
    const poll = polls.find((poll) => poll.id === pollId);
    const newVotes = [...poll.votes];
    newVotes[optionIndex]++;
    await axios.put(`http://localhost:5000/polls/${pollId}`, {
      ...poll,
      votes: newVotes,
    });
    setPolls(
      polls.map((p) => (p.id === pollId ? { ...poll, votes: newVotes } : p))
    );
    alert("Vote Saved")
    setSelectedPoll(""); 
    setSelectedOption(null);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="w-full max-w-lg p-6 bg-gray-400 rounded-lg shadow-md">
        <h1 className="text-2xl mb-4 text-center font-bold">Vote in a Poll</h1>
        <select
          onChange={(e) => setSelectedPoll(e.target.value)}
          className="border p-2 mb-4 w-full rounded"
        >
          <option value="">Select a Poll</option>
          {polls.map((poll) => (
            <option key={poll.id} value={poll.id}>
              {poll.question}
            </option>
          ))}
        </select>
        {selectedPoll && (
          <div className="mb-4">
            {polls
              .find((poll) => poll.id === selectedPoll)
              .options.map((option, index) => (
                <div key={index} className="flex items-center mb-2 w-full">
                  <input
                    type="radio"
                    id={`option${index}`}
                    name="option"
                    value={index}
                    onChange={() => setSelectedOption(index)}
                    className="mr-2"
                  />
                  <label htmlFor={`option${index}`} className="ml-2 w-full">
                    <input
                      type="text"
                      className="w-full p-2 border rounded"
                      value={option}
                      readOnly
                    />
                  </label>
                </div>
              ))}
            <button
              className="bg-blue-500 text-white p-2 w-full rounded"
              onClick={() => vote(selectedPoll, selectedOption)}
            >
              Vote
            </button>
          </div>
        )}
        <Link
          to="/create"
          className="bg-black text-white p-2 mt-2 rounded w-full block text-center"
        >
          Back to Create Poll
        </Link>
      </div>
    </div>
  );
};

export default VotePoll;

