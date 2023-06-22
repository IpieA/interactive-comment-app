import data from "./data.json";
import Comment from "./components/Comment";
import AddComment from "./components/AddComment";

function App() {
  return (
    <div className="app">
      {data.comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
      <AddComment data={data}/>
    </div>
  );
}

export default App;
