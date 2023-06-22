import Likes from "./Likes";
import ReplyButton from "./ReplyButton";

const Comment = ( {comment} ) => {

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

  
  return (
    <>
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
        <Likes voteNumber={comment.score}/>
        <ReplyButton />
      </div>
    </div>
    {comment.replies && comment.replies.length > 0 && (
      <div>
        {renderReplies(comment.replies)}
      </div>
    )}
    </>
  )  
};

export default Comment;
