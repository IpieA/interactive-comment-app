import data from "./data.json";
import Comment from "./components/Comment";

function App() {
  return (
    <div className="App">
      {data.comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
}

export default App;
