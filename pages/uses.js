import Master from "../components/Master";
import {IoLogoJavascript} from "react-icons/io"
import {DiReact} from "react-icons/di"
import {SiNextdotjs, SiMongodb} from "react-icons/si"
import {FaLaravel, FaBootstrap} from "react-icons/fa"
import {GrMysql} from "react-icons/gr"
import Head from "next/head";
import article from "./articles/[article]";

const uses = () => {
  return (
    <Master>
      <Head>
        <title>Uses | {process.env.NEXT_PUBLIC_APP_NAME}</title>
      </Head>
      <article className="my-3">
          <h3 className="mb-4">👨‍💻 Programming</h3>
          <ul>
            <li className="mb-3"><IoLogoJavascript className="mx-2" color="E4D04B"/> JavaScript</li>
            <li className="mb-3"><DiReact className="mx-2" color="5CCFEE" /> React Js</li>
            <li className="mb-3"><SiNextdotjs className="mx-2" /> Next Js</li>
            <li className="mb-3"><FaBootstrap className="mx-2" color="8211F2" /> Bootstrap</li>
            <li className="mb-3"><FaLaravel className="mx-2" color="F22B1E" /> Laravel</li>
            <li className="mb-3"><GrMysql className="mx-2" color="006084" /> mySQL</li>
            <li className="mb-3"><SiMongodb className="mx-2" color="0FA14C" /> mongoDB</li>
          </ul>
      </article>
    </Master>
  );
};

export default uses;
