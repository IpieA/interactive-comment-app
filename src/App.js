import data from "./data.json";
import Comments from "./components/Comments";
import AddComment from "./components/AddComment";

function App() {
  return (
    <div className="app">
      <Comments comments={data.comments}/>
      <AddComment data={data}/>
    </div>
  );
}

export default App;
