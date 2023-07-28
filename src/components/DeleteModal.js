import Button from "./Button";

const DeleteModal = ( {handleDeleteComment, handleCancelDelete} ) => {
  return (
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
  )
}

export default DeleteModal
