import Head from "next/head";
import Master from "../components/Master";
import MyLinks from "../components/partials/MyLinks";

const About = () => {
  return (
    <Master>
      <Head>
        <title>About | {process.env.NEXT_PUBLIC_APP_NAME}</title>
      </Head>
      <div className="text-center mb-5">
      <div className="my-avatar rounded-pill border border-4 shadow-sm mb-3 mx-auto"></div>
        <h1 className="h3">Moustapha Amouchal</h1>
        <p>
          I really like writing code. <br />
          Especially in Javascript and React.
        </p>
        <MyLinks color="rgb(19, 20, 21)" />
        <p className="mt-5 mb-3">
          {`Hi, I'm Moustapha, a web developer. My ultimate goal is to become a
          dragon developer 🐉 who can create cutting-edge applications that push
          the limits of what is possible ☄️.`}
        </p>
        <p>
          {`I believe that personal growth is essential to success, and I'm
          committed to expanding my knowledge and skills in every area of my
          life.`}
        </p>
      </div>
    </Master>
  );
};

export default About;
