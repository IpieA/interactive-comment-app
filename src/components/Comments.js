import Comment from "./Comment"

const Comments = ({ comments, onDelete, onSave }) => {
  const renderComments = (comments) => {
    return comments.map((comment) => (
      <Comment key={comment.id} comment={comment} onDelete={onDelete} onSave={onSave}/>
    ));
  };

  return <div>{renderComments(comments)}</div>;
}

export default Comments;
