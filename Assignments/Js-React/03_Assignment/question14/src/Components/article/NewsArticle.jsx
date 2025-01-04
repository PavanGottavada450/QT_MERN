import React from 'react'
import './NewsArticle.css'

function NewsArticle({headline, description, articleImage}) {
  return (
    <div className='container'>
        <h1 style={{color : "red"}}>News Article</h1>
        <img src={articleImage} alt="" />
        <h3>{headline}</h3>
        <p>{description}</p>
    </div>
  )
}

export default NewsArticle