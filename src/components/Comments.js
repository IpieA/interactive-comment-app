import Comment from "./Comment"

const Comments = ({ comments }) => {
  const renderComments = (comments) => {
    return comments.map((comment) => (
      <Comment key={comment.id} comment={comment} />
    ));
  };

  return <div>{renderComments(comments)}</div>;
}

export default Comments;
