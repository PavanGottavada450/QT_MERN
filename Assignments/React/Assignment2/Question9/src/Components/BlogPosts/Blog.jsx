/* eslint-disable react/prop-types */
import "./Blog.css";

function Blog({ title, summary }) {
  return (
    <div id="card">
      <h1>Title : {title}</h1>
      <p>Summary : {summary}</p>
    </div>
  );
}

export default Blog;
