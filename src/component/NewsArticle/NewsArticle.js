import React from 'react'
import './NewsArticle.css'

export default function NewsArticle({ urlToImage, title, description, url, publishedAt, content, author }) {
  return (
    <div className="news-article-card">
      <img src={urlToImage} alt="" className="news-article-image" />
      <h1 className="article-title">{title}</h1>

      <div className="article-info">
        <p className="article-desc">{author}</p>
        <p className="article-desc">{publishedAt}</p>
      </div>
    </div>
  );
}
