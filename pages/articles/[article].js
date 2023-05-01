import Head from "next/head";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { articles } from "/db/articles";
import Master from "../../components/Master";
import Comments from "../../components/partials/Comments"
import Image from "next/image";
const Article = () => {
  const router = useRouter();
  const { article: slug } = router.query;
  const [article, setArticle] = useState();
  
  useEffect(() => {
    setArticle(articles.find((article) => article.slug === slug));
  }, [slug]);

  return (
    <Master>
      <Head>
        <title>
          {article?.title} | {process.env.NEXT_PUBLIC_APP_NAME}
        </title>
        <meta name="keywords" content={article?.tags.join(', ')}/>
      </Head>
      <article>
        <h1 className="text-center mb-4">{article?.title}</h1>
        <div className="d-flex justify-content-center align-items-center mb-4">
          <h3 className="h6 fw-light">
            {new Date(article?.created_at).toLocaleDateString("en-US", {
              day: "2-digit",
              year: "numeric",
              month: "long",
            })}
          </h3>
          <span className="mx-2 fw-light mb-2">|</span>
          {!!article?.author && (
            <>
              <h3 className="h6 fw-light">{article.author}</h3>
              <span className="mx-2 fw-light mb-2">|</span>
            </>
          )}

          <h3 className="h6 fw-light">
            {article?.tags.map(
              (tag, i) => `${tag}${i !== article?.tags.length - 1 ? ", " : ""}`
            )}
          </h3>
        </div>
        <img src={article?.image} alt="" className="img-fluid" />
        {/* <Image src={article?.image} 
        alt="article image" 
        className="img-fluid" 
        layout="fill"
        objectFit="cover" 
        /> */}
        <div
          className="pt-5 article"
          dangerouslySetInnerHTML={{ __html: article?.body }}
        >
          {/* {article?.body} */}
        </div>
      </article>
      <Comments post={{id: article?.id, title: article?.title, slug: article?.slug}}/>
    </Master>
  );
};

export default Article;
