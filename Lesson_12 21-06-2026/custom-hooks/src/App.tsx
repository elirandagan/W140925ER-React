import "./App.css";
import { CommentBox } from "./components/CommentBox";
import { SearchBox } from "./components/SearchBox";
import LikesCounter from "./components/LikesCounter";
import ProductCounter from "./components/ProductCounter";

function App() {
  return (
    <>
      <h1>Custom Hooks</h1>
      <ProductCounter />
      <hr />
      <LikesCounter />
      <hr />
      <CommentBox />
      <hr />
      <SearchBox />
    </>
  );
}

export default App;
