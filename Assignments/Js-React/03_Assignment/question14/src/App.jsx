import "./App.css";
import NewsArticle from "./Components/article/NewsArticle";
import Header from "./Components/Header/Header";

function App() {

  const headline = "NEXT JS";
  const description = "Next.js is a popular React framework that extends React’s capabilities by providing powerful tools for server-side rendering, static site generation, and full-stack development. It is widely used to build SEO-friendly, high-performance web applications easily";
  const articleImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV9uzErWz9EXqZDxZ5lP9aYpMz8eK6rr5X3w&s";

  return (
    <div>
      <Header />
      <NewsArticle headline={headline} description = {description} articleImage = {articleImage}/>
    </div>
  );
}

export default App;
