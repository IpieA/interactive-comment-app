import Comment from "./Comment"

const Comments = ({ comments, onDelete }) => {
  const renderComments = (comments) => {
    return comments.map((comment) => (
      <Comment key={comment.id} comment={comment} onDelete={onDelete}/>
    ));
  };

  return <div>{renderComments(comments)}</div>;
}

export default Comments;
