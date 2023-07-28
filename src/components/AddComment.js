import { useState } from 'react'
import data from '../data.json'
import Button from "./Button"

const AddComment = ( { onAddComment } ) => {

  const [comment, setComment] = useState("");

  const handleInputChange = (event) => {
    setComment(event.target.value);
  };

  const generateId = () => {
    return Math.random() * 1000000;
  }

  const handleAddComment = () => {
    console.log(comment);
    if (comment){
      //cretae a new comment object
      const newComment = {
        id: generateId(),
        user: data.currentUser,
        content: comment,
        createdAt: new Date().toDateString(),
        score: 0,
        replies: [],
      };

      // Call the onAddComment callback with the new comment
      onAddComment(newComment);

      // Clear the input field
      setComment('');
    };
  };

  return (
    <div className="add-comment-container">
        <textarea 
          type="text"
          className="add-comment-textarea"
          placeholder="Add a comment..."
          value={comment}
          onChange={handleInputChange}
        ></textarea>
      <div className='send-comment-container'>
        <img className='user-image' src={data.currentUser.image.png} alt="" />
        <Button 
          color={"hsl(238, 40%, 52%)"} 
          text={"SEND"}
          handleOnClick={handleAddComment}
        />
      </div>
    </div>
  )
}

export default AddComment
