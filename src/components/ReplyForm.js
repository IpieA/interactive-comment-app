import { useState } from "react"
import data from "../data.json"
import Button from "./Button"

const ReplyForm = ( {submitReply} ) => {
 
    const [replyContent, setReplyContent] = useState('');

    const handleInputChange = (event) => {
        setReplyContent(event.target.value);
    };

    const handleReplySubmit = () => {
        if (replyContent) {
          submitReply(replyContent);
          setReplyContent('');
        }
    };
    
  return (
    <div className="reply-form">
        <img className='user-image' src={data.currentUser.image.png} alt="user image" />
        <input 
          type="text"
          id=""
          name=""
          placeholder="Reply..."
          value={replyContent}
          onChange={handleInputChange}
        />
        <Button 
            text={"SEND"} 
            handleOnClick={handleReplySubmit} 
            color={"hsl(238, 40%, 52%)"} 
        />
    </div>
  )
}

export default ReplyForm


