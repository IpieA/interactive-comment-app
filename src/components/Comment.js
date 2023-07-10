import { useState } from "react";
import data from "../data.json"
import Likes from "./Likes";
import ReplyButton from "./ReplyButton";
import ReplyForm from "./ReplyForm";
import Edit from "./Edit";
import Delete from "./Delete";

const Comment = ( {comment, onDelete} ) => {

  const [score, setScore] = useState(comment.score);
  const [liked, setLiked] = useState(false);
  const [replies, setReplies] = useState(comment.replies || []);
  const [showReplyForm, setShowReplyForm] = useState(false);

  const handleLike = () => {
    if (!liked) {
      setScore(score + 1);
      setLiked(true);
    }
  };

  const handleUnlike = () => {
    if (liked) {
      setScore(score - 1);
      setLiked(false);
    }
  };

  const generateUniqueId = () => {
    return Math.random() * 200;
  };

  const submitReply = (replyContent) => {
    const newReply = {
      id: generateUniqueId(),
      content: replyContent,
      user: data.currentUser,
      createdAt: new Date().toDateString(),
      score: 0
    }

    setReplies([...replies, newReply]);
  };

  const handleReplyButtonClick = () => {
    setShowReplyForm(!showReplyForm);
  };

  const renderReplies = (replies) => {
    return (
      <ul className="comment-replies">
        {replies.map((reply) => (
          <li className="single-reply" key={reply.id}>
            <Comment comment={reply} />
          </li>
        ))}
      </ul>
    );
  };
  
  const currentUserName = data.currentUser.username;

  return (
    <>
    {comment.user.username === currentUserName ? (
      <div className="single-comment">
        <div className="user-info-container">
          <img className="user-image" src={comment.user.image.png} alt="" />
          <span className="username">{comment.user.username}</span>
          <span className="you-text">you</span>
          <span className="date-posted">{comment.createdAt}</span>
        </div>
        <div className="comment-text">
          {comment.content}
        </div>
        <div className="vote-and-reply-container">
          <Likes voteNumber={score} onUpvote={handleLike} onDownvote={handleUnlike}/>
          <div className="edit-delete-container">
          <Delete onClick={() => onDelete(comment)} />
          <Edit />
          </div>
        </div>
      </div>
    ) : (
      <div className="single-comment">
        <div className="user-info-container">
          <img className="user-image" src={comment.user.image.png} alt="" />
          <span className="username">{comment.user.username}</span>
          <span className="date-posted">{comment.createdAt}</span>
        </div>
        <div className="comment-text">
          {comment.content}
        </div>
        <div className="vote-and-reply-container">
          <Likes voteNumber={score} onUpvote={handleLike} onDownvote={handleUnlike}/>
          <ReplyButton handleReplyButtonClick={handleReplyButtonClick} />
        </div>
      </div>
    )}

    {showReplyForm && <ReplyForm submitReply={submitReply}/>}
    {replies && replies.length > 0 && (
      <div>
        {renderReplies(replies)}
      </div>
    )}
    </>
  )  
};

export default Comment;
