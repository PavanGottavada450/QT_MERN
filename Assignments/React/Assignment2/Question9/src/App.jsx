import "./App.css";
import Blog from "./Components/BlogPosts/Blog";
import Header from "./Components/Header/Header";


function App() {

  const blogs = [
    { "id": 1, "title": "React Basics", "summary": "Learn the basics of React." },
    { "id": 2, "title": "Hooks in React", "summary": "Understanding React Hooks." },
    { "id": 3, "title": "Advanced Patterns", "summary": "Explore advanced React patterns." }
  ]

  return (
    <div>
      <Header />
      <div id="container">
          {blogs.map((blog,index)=>(
              <Blog 
              key={index}
              title={blog.title}
              id={blog.id}
              summary={blog.summary}
              />
          ))}
      </div>
      
      
    </div>
  );
}

export default App;
