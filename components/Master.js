
import Navbar from "./partials/Navbar"
import Footer from "./partials/Footer"

const Master = ({children}) => {
  return (
    <>
    <Navbar />
        <main className="container py-5">
            {children}
        </main>
    <Footer />
    </>
  )
}

export default Master