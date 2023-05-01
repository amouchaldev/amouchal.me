import Master from "/components/Master";
import Articles from "../../components/articles/Articles";
import Head from "next/head";
const articles = () => {
  return (
    <Master>
      <Head>
        <title>Articles | {process.env.NEXT_PUBLIC_APP_NAME}</title>
      </Head>
            <Articles page="articles"/>
    </Master>
  );
};

export default articles;
