import React, { useState } from "react";
import axios from "axios";

const Comment = ({ comment, fetchComments }) => {
  const [replyText, setReplyText] = useState("");
  const [showReply, setShowReply] = useState(false);

  const handleReply = async () => {
    if (replyText.trim()) {
      await axios.post("http://localhost:5000/comments", {
        pollId: comment.pollId,
        text: replyText,
        parentId: comment.id,
      });
      setReplyText("");
      setShowReply(false);
      fetchComments();
    }
  };

  return (
    <div className="mb-2">
      <div className="border p-2 bg-white">
        {comment.text}
        <button
          onClick={() => setShowReply(!showReply)}
          className="ml-2 text-blue-500"
        >
          Reply
        </button>
      </div>
      {showReply && (
        <div className="ml-4 mt-2">
          <textarea
            className="w-full p-2 border"
            rows="2"
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
          ></textarea>
          <button
            onClick={handleReply}
            className="bg-blue-500 text-white p-1 mt-1"
          >
            Submit Reply
          </button>
        </div>
      )}
    </div>
  );
};

export default Comment;
