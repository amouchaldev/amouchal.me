import Link from "next/link"
import {useRouter} from "next/router"
const Navbar = ({bg}) => {
  const router = useRouter()
  const activeLink = router.pathname
  return (
    <nav className={`navbar navbar-expand-md navbar-${bg ?? 'light'} shadow-none`}>
    <div className="container">
      <Link className="navbar-brand" href="/">
        👨🏻‍💻 Moustapha
        {/* <img src={logo} alt="logo" className="pt-2 ms-1" /> */}
      </Link>
      <button
        className="navbar-toggler d-lg-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapsibleNavId"
        aria-controls="collapsibleNavId"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="collapsibleNavId">
        <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
          <li className="nav-item me-2 ">
            <Link className={`nav-link${activeLink === "/articles" ? " active" : ""}`} href="/articles">
              Articles
            </Link>
          </li>
          <li className="nav-item me-2">
            <Link className={`nav-link${activeLink === "/projects" ? " active" : ""}`} href="/projects">
              Projects
            </Link>
          </li>
          {/* <li className="nav-item me-2">
            <NavLink className={({isActive}) => `nav-link${isActive ? ' active' : ''}`} to="highlights">
              Book highlights
            </NavLink>
          </li> */}
          <li className="nav-item me-2">
            <Link className={`nav-link${activeLink === "/about" ? " active" : ""}`} href="/about">
              About
            </Link>
          </li>
          <li className="nav-item me-2">
            <Link className={`nav-link${activeLink === "/uses" ? " active" : ""}`} href="/uses">
              Uses
            </Link>
          </li>
          {/* <li className="nav-item me-2">
            <Link className={`nav-link${activeLink === "/contact" ? " active" : ""}`} href="/contact">
              Contact me
            </Link>
          </li> */}
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Navbar