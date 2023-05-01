import Link from "next/link";
import Navbar from "../components/partials/Navbar";
import Articles from "/components/articles/Articles";
import Footer from "../components/partials/Footer";
import MyLinks from "../components/partials/MyLinks";
import Head from "next/head";
const index = () => {
  return (
    <>
    <Head>
        <title>{process.env.NEXT_PUBLIC_APP_NAME}</title>
        <meta name="description" content="moustapha amouchal web developer laravel & react"/>
        <meta name="keywords" content="moustapha amouchal, amouchal, dev, react, laravel"/>
    </Head>
      <header className="bg-success">
        <Navbar />
        <div className="container">
          <section className="row py-5">
            <div className="col-md-7 text-light order-2 order-md-1">
              <div className="mb-2 text-center text-md-start">
                <span className="display-2 me-2">👋</span>
                <h4 className="d-inline-block fw-bold">
                  Hello, I'm Moustapha!
                </h4>
              </div>
              <p className="text-center text-md-start">
                /* Web Developer 👨🏻‍💻, In this website I share whatever
                <br />I create and my thoughts on various topics. My money ..
                <br />I mean my opinions are my own. */
              </p>
            </div>
            <div className="col-md-5 order-1 order-md-2 mb-3 mb-md-0 d-flex flex-column align-items-center">
              <div className="my-avatar rounded-pill border border-4 shadow-sm mb-3"></div>
              <MyLinks />
            </div>
          </section>
        </div>
      </header>
      <main className="container py-5">
        <Articles />
        <Link href="/articles" className="text-decoration-none p-0 mt-3">View all articles</Link>
      </main>
      <Footer />
    </>
  );
};

export default index;
