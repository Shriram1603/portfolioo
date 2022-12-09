import "bootstrap/dist/css/bootstrap.min.css"
import "./navbar.css"
import logo from "./images/logo3.png"
import {Link} from "react-scroll"
// import { Link} from "react-router-dom"
import { HashLink } from "react-router-hash-link"
// react font awesome 
// import { FontAwesomeSvgIcon } from '@fortawesome/react-fontawesome';
// import {faBars} from '@fortawesome/react-fontawesome';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark sticky-top">
  <div className="container">
    <a className="navbar-brand" href="#"><img src={logo}/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      {/* <FontAwesomeSvgIcon icon="faBars"/> */}
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto  mb-2 mb-lg-0">
        <li className="nav-item">
        {/* <Link smooth className="nav-link" to="home" spy={true} smooth={true} offset={50} duration={500} >Home</Link> */}
          <a className="nav-link active" aria-current="page" href="#home">Home</a>
        </li>
        <li className="nav-item">
          {/* <Link smooth className="nav-link" to="about" spy={true} smooth={true} offset={50} duration={500}>about</Link> */}
          <a className="nav-link" href="#about">about</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#service">services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#timeline">experience</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">portfolio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">contact</a>
        </li>
        </ul>
    </div>
  </div>
</nav>
  )
}
