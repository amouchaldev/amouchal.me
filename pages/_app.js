import '/node_modules/bootswatch/dist/materia/bootstrap.min.css'
import '../assets/styles/globals.css'
import '../assets/styles/nprogress.css'
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import NProgress from 'nprogress';
import Script from "next/script"

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    require("/assets/js/bootstrap.bundle.min.js");
  }, []);
  const router = useRouter();
  NProgress.configure({showSpinner:false})

  useEffect(() => {
    router.events.on('routeChangeStart', () =>  NProgress.start());
    router.events.on('routeChangeComplete', () =>  NProgress.done());
    router.events.on('routeChangeError', () =>  NProgress.done());
  }, []);
  return (
    <>
    <Component {...pageProps} />
    </>
  )
}

export default MyApp
