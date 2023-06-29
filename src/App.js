import { useState } from "react";
import data from "./data.json";
import Comments from "./components/Comments";
import AddComment from "./components/AddComment";

function App() {

  const [comments, setComments] = useState(data.comments);

  const handleAddComment = (newComment) => {
    //Add new comment to existing comments
    setComments([...comments, newComment]);
  };

  return (
    <div className="app">
      <Comments comments={comments}/>
      <AddComment onAddComment={handleAddComment}/>
    </div>
  );
}

export default App;
