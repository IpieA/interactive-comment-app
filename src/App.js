import { useState } from "react";
import data from "./data.json";
import Comments from "./components/Comments";
import AddComment from "./components/AddComment";
import Button from "./components/Button";

function App() {

  const [comments, setComments] = useState(data.comments);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [commentToDelete, setCommentToDelete] = useState(null);
  const [editingComment, setEditingComment] = useState(null);

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

  const handleSaveEdit = (commentId, editedComment) => {
    setComments((prevComments) => 
      prevComments.map((comment) => 
        comment.id === commentId ? { ...comment, content: editedComment} : comment
      )
    )
  };

  return (
    <div className="app">
      <Comments comments={comments} onDelete={handleDelete} onSave={handleSaveEdit}/>
      <AddComment onAddComment={handleAddComment} />
      {showDeleteModal && (
        <div className="delete-overlay">
          <div className="delete-modal">
            <h2>Delete Comment</h2>
            <p>Are you sure you want to delete this comment? 
              This will remove the comment and can't be undone
            </p>
            <div className="modal-buttons-container">
              <Button 
                text={"No, Cancel"} 
                handleOnClick={handleCancelDelete} 
                color={"hsl(211, 10%, 45%)"} 
              />
              <Button 
                text={"Yes, Delete"} 
                handleOnClick={handleDeleteComment} 
                color={"hsl(358, 79%, 66%)"} 
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
