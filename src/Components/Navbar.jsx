import { Link } from "react-router-dom";
import logo from '../assets/images/Gad.png';
import { useEffect } from "react";
import '../assets/styles/navbar.css'
import name from '../assets/images/G.png'

const Navbar = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return ( 
    <div className="navbar">
      <div className="nav0">
        <a href="/">
      <img src={logo} alt="Gad Logo" className="logo-img"/>
      </a>
      <a href="/">
      <img src={name} alt="Gad Logo" className="logo"/>
      </a>
      </div>

      <div className="nav1">
      <Link to="/" className="nav">Home</Link>
      <Link to="/service" className="nav">Services</Link>
      <Link to="/blog" className="nav">Blogs</Link>
      <Link to="/about" className="nav">About</Link>
      <Link to="/contact" className="nav" >Contact</Link>
      </div>
    </div>
   );
}
 
export default Navbar;