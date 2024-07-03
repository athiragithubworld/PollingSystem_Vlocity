
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreatePoll = () => {
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState(["", ""]);
  const navigate = useNavigate();

  const handleOptionChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const handleAddOption = () => {
    setOptions([...options, ""]);
  };

  const handleRemoveOption = (index) => {
    setOptions(options.filter((_, i) => i !== index));
  };

 const handleSubmit = async (e) => {
   e.preventDefault();

  //  if (!question && options.length === 0) {
  //    alert("Please fill in the question and add at least one option.");
  //    return;
  //  }

   try {
     await axios.post("http://localhost:5000/polls", {
       question,
       options,
       votes: Array(options.length).fill(0),
     });
     alert("Poll Created Successfully");
     navigate("/");
   } catch (error) {
     console.error("Error creating poll:", error);
     alert("There was an error creating the poll. Please try again.");
   }
 };


  return (
    
    <div className="flex justify-center items-center  bg-white">
      <div className="w-full max-w-lg p-6 bg-gray-400 rounded-lg shadow-md">
        <h1 className="text-2xl mb-4 text-center font-bold">Create Poll</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Question:</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Options:</label>
            {options.map((option, index) => (
              <div key={index} className="flex mb-2">
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  value={option}
                  onChange={(e) => handleOptionChange(index, e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="ml-2 bg-red-500 text-white p-2 rounded"
                  onClick={() => handleRemoveOption(index)}
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              type="button"
              className="bg-blue-500 text-white p-2 mt-2 rounded"
              onClick={handleAddOption}
            >
              Add Option
            </button>
          </div>
          <button
            type="submit"
            className="bg-black text-white p-2 rounded w-full"
          >
            Create Poll
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePoll;
