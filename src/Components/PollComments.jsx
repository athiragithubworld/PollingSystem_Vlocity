import React, { useState, useEffect } from "react";
import axios from "axios";
import Comment from "./Comment";

const PollComments = ({ pollId }) => {

  console.log(pollId,"poll id")
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");

  const fetchComments = async () => {
    const response = await axios.get(
      `http://localhost:5000/comments?pollId=${pollId}`
    );
    setComments(response.data);
  };

  useEffect(() => {
    fetchComments();
  }, [pollId]);

  const handleComment = async () => {
    if (commentText.trim()) {
      await axios.post("http://localhost:5000/comments", {
        pollId: pollId,
        text: commentText,
        parentId: null,
      });
      setCommentText("");
      fetchComments();
    }
  };

  return (
    <div className="mt-4">
      <h3 className="text-lg">Comments</h3>
      <textarea
        className="w-full p-2 border"
        rows="3"
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
      ></textarea>
      <button
        className="bg-blue-500 text-white p-2 mt-2"
        onClick={handleComment}
      >
        Add Comment
      </button>
      <div className="mt-4">
        {comments
          .filter((c) => !c.parentId)
          .map((comment) => (
            <div key={comment.id}>
              <Comment comment={comment} fetchComments={fetchComments} />
              {comments
                .filter((c) => c.parentId === comment.id)
                .map((reply) => (
                  <Comment
                    key={reply.id}
                    comment={reply}
                    fetchComments={fetchComments}
                  />
                ))}
            </div>
          ))}
      </div>
    </div>
  );
};

export default PollComments;
