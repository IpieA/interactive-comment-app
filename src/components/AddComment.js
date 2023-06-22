import data from '../data.json'
import Button from "./Button"

const AddComment = ( {} ) => {
  return (
    <div className="add-comment-container">
        <input 
            type="text" 
            name="" 
            id="" 
            placeholder="Add a comment..."
        />
      <div className='send-comment-container'>
        <img className='user-image' src={data.currentUser.image.png} alt="" />
        <Button color={"hsl(238, 40%, 52%)"} text={"SEND"}/>
      </div>
    </div>
  )
}

export default AddComment
