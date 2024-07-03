
import React, { useState, useEffect } from "react";
import axios from "axios";
import PollComments from "./PollComments";

const PollResults = () => {
  const [polls, setPolls] = useState([]);

  useEffect(() => {
    const fetchPolls = async () => {
      const response = await axios.get("http://localhost:5000/polls");
      setPolls(response.data);
    };
    fetchPolls();
  }, []);

  const handleDelete = async (pollId) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this poll?"
    );
    if (confirmed) {
      try {
        await axios.delete(`http://localhost:5000/polls/${pollId}`);
        setPolls((prevPolls) => prevPolls.filter((poll) => poll.id !== pollId));
      } catch (error) {
        console.error("Error deleting poll:", error);
      }
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="w-full max-w-xl p-6 bg-gray-400 rounded-lg shadow-md">
        <h1 className="text-2xl mb-4 text-center font-bold">Poll Results</h1>
        {polls.map((poll) => (
          <div key={poll.id} className="mb-4">
            <h2 className="text-xl">{poll.question}</h2>
            {poll.options.map((option, index) => (
              <div key={index} className="flex justify-between">
                <span>{option}</span>
                <span className="font-bold">{poll.votes[index]}</span>
              </div>
            ))}
            <button
              className="mt-2 bg-red-500 text-white py-1 px-2 rounded"
              onClick={() => handleDelete(poll.id)}
            >
              Delete Poll
            </button>
            <PollComments pollId={poll.id} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PollResults;
