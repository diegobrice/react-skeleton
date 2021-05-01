import React, { useEffect, useState } from 'react';
import SkeletonElement from '../skeletons/SkeletonElement';

const Articles = () => {
  const [articles, setArticles] = useState(null);
  useEffect(() => {
    setTimeout(async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await res.json();
      data.length = 10;
      console.log(data);
      setArticles(data);
    }, 1000);
  }, []);
  return (
    <div className="articles">
      <h2>Articles</h2>
      {!articles ? (
        <>
          <SkeletonElement type="title"/>
          <SkeletonElement type="text"/>
          <SkeletonElement type="text"/>
          <SkeletonElement type="text"/>
        </>
      ) : (
        articles.map((article) => {
          return (
            <div key={article.id} className="article">
              <h3>{article.title}</h3>
              <p>{article.body}</p>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Articles;
