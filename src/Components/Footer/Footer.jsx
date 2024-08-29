import React from "react";
import "./Footer.css";
import footer from "../../assets/img/footer.png";
import { Link } from "react-router-dom";

const Footer = () => {

    const handleClick = () =>{
      window.scrollTo(0,0)
    }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer_wrapper">
          <div className="footer_box">
            <div className="logo">
              <div className="logo-img">
                <img src={footer} alt="footer" />
              </div>
              <h2>Code Vibe</h2>
            </div>
            <p>
              Embrace the future of innovation and technology with our
              cutting-edge tech business solution
            </p>
          </div>

          <div className="footer_box">
            <h4 className="footer_title">Company </h4>
            <ul className="footer_links">
              <li>
                 <Link to='/Courses' onClick={handleClick}>Our Programs</Link> 
                </li>
              <li>
                 <Link to='/Services' onClick={handleClick}>Our Plan</Link>
                </li>
              <li>
                 <Link to='/Community' onClick={handleClick}>Become a member</Link>
                </li>
            </ul>
          </div>

          <div className="footer_box">
            <h4 className="footer_title">Quick Link </h4>
            <ul className="footer_links">
              <li>
                 <Link to='/About' onClick={handleClick}>About Us </Link>
                </li>
              <li>
                 <Link to='/Contact' onClick={handleClick}>Contact Us</Link>
                </li>
              <li>
                 <Link to='/Support' onClick={handleClick}>Support Us</Link>
                </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
