import Likes from "./Likes";
import ReplyButton from "./ReplyButton";

const Comment = ( {comment} ) => {

  const renderReplies = (replies) => {
    return (
      <ul>
        {replies.map((reply) => (
          <li key={reply.id}>
            <Comment comment={reply} />
          </li>
        ))}
      </ul>
    );
  };

  
  return (
    <div>
      <div>
          <img src={comment.user.image.png} alt="" />
          <span>{comment.user.username}</span>
          <span>{comment.createdAt}</span>
      </div>
      <div>
        {comment.content}
      </div>
      <div>
        <Likes voteNumber={comment.score}/>
        <ReplyButton />
      </div>
      {comment.replies && comment.replies.length > 0 && (
        <div>
          <h4>Replies:</h4>
          {renderReplies(comment.replies)}
        </div>
      )}
    </div>
  )  
};

export default Comment;
