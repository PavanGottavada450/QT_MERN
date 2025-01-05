import "./App.css";
import Blog from "./Components/blog/Blog";
import Header from "./Components/Header/Header";

function App() {

  const title = "Understanding JSX";
  const content = "JSX allows you to write HTML in React.";
  const tags = ["React", "JavaScript", "JSX"];

  return (
    <div>
      <Header />
      <Blog title={title} content = {content} tags = {tags}/>
    </div>
  );
}

export default App;
