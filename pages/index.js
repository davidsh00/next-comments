import { useState, useEffect } from "react";
import CommentForm from "../components/comment/comment-form";
import CommentList from "../components/comment/comment-list";

function HomePage() {
  const [showSendComment, setShowSendComment] = useState(false);
  const [needUpdate, setNeedUpdate] = useState(false);
  const [comments, setComments] = useState([]);
  useEffect(() => {
    fetch("/api/comments")
      .then((response) => response.json())
      .then((data) => {
        setComments(data);
        setNeedUpdate(false);
      });
  }, [needUpdate]);
  const handleSubmit = (newComment) => {
    fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ comment: newComment }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setNeedUpdate(true);
      });
  };
  return (
    <>
      <div id="home">
        <div className="section_comment-list">
          <h3 className="comment-list_title">Recent Comments:</h3>
          <CommentList list={comments} setNeedUpdate={setNeedUpdate}/>
        </div>
        <div className="section_comment-form">
          <CommentForm handleSubmit={handleSubmit} />
        </div>
      </div>
    </>
  );
}
export default HomePage;
