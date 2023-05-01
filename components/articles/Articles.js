import  { articles as data } from "/db/articles"
import { useState } from "react";
import Link from "next/link"
const articles = ({page}) => {
  const [articles] = useState(page === 'articles' ? data : data.slice(0, 5));
  return (
      <div className="row">
        {articles.map((article, index) => {
          return (
            <Link href={`/articles/${article.slug}`} className="card mb-4 text-reset text-decoration-none p-0" key={index} >
                {page === 'articles' && (<div 
                className="card-img-top article-img"
                style={{backgroundImage: `url(${article.image})`}}
                ></div>)}
                {/* {page === 'articles' && <img className="card-img-top" src={article.image} alt="Title" />} */}
                <div className="card-body">
                  <h4 className="card-title mb-3 fw-bold">
                    {article.title}
                  </h4>
                  <p className="card-text">
                  {article.description} ...
                  </p>
                </div>
            </Link>
          );
        })}
      </div>
  );
};

export default articles;
