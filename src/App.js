import { useState } from "react";
import data from "./data.json";
import Comments from "./components/Comments";
import AddComment from "./components/AddComment";
import DeleteModal from "./components/DeleteModal";

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
        <DeleteModal handleDeleteComment={handleDeleteComment} handleCancelDelete={handleCancelDelete}/>
      )}
    </div>
  );
}

export default App;
