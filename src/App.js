import { useState } from "react";
import data from "./data.json";
import Comments from "./components/Comments";
import AddComment from "./components/AddComment";

function App() {

  const [comments, setComments] = useState(data.comments);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [commentToDelete, setCommentToDelete] = useState(null);

  const handleAddComment = (newComment) => {
    //Add new comment to existing comments
    setComments([...comments, newComment]);
  };

  const handleDeleteComment = () => {
    if (commentToDelete) {
      const updatedComments = comments.filter(
        (comment) => comment.id !== commentToDelete.id
      );
      setComments(updatedComments);
      setCommentToDelete(null);
      setShowDeleteModal(false);
    }
  };

  const handleDelete = (comment) => {
    setCommentToDelete(comment);
    setShowDeleteModal(true);
  };

  const handleCancelDelete = () => {
    setShowDeleteModal(false);
  };

  return (
    <div className="app">
      <Comments comments={comments} onDelete={handleDelete} />
      <AddComment onAddComment={handleAddComment} />
      {showDeleteModal && (
        <div className="delete-modal">
          <p>Are you sure you want to delete this comment?</p>
          <button onClick={handleCancelDelete}>Cancel</button>
          <button onClick={handleDeleteComment}>Delete</button>
        </div>
      )}
    </div>
  );
}

export default App;
