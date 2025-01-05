import React from 'react'
import "./Blog.css"

function Blog({title,content,tags}) {
  return (
    <div className='blog-post'>
        <h1>{title}</h1>
        <p>{content}</p>
        <ul>
            {tags.map((list, index) => <li key={index}>{list}</li>)}
        </ul>
    </div>
  )
}

export default Blog