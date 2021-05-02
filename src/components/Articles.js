import React, { useEffect, useState } from 'react';
import SkeletonArticle from '../skeletons/SkeletonArticle';

const Articles = () => {
  const [articles, setArticles] = useState(null);
  useEffect(() => {
    setTimeout(async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await res.json();
      data.length = 10;
      console.log(data);
      setArticles(data);
    }, 5000);
  }, []);
  return (
    <div className="articles">
      <h2>Articles</h2>
      {!articles && [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => <SkeletonArticle />)}
      {articles &&
        articles.map((article) => {
          return (
            <div key={article.id} className="article">
              <h3>{article.title}</h3>
              <p>{article.body}</p>
            </div>
          );
        })}
    </div>
  );
};

export default Articles;
