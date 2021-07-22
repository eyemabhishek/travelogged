import React from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Footer.css";
function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">JOIN THE ADVENTURE CLUB</p>
        <p className="footer-subscription-text">
          You can unsubscribe at any time!!!
        </p>
        <div className="input-areas">
          <form>
            <input
              type="email"
              name="email"
              placeholder="type your email..."
              className="footer-input"
            />
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About us</h2>
            <Link to="/signup">How it works</Link>
            <Link to="/">Testimonials</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Investors</Link>
            <Link to="/">Terms & Condition</Link>
          </div>
          <div className="footer-link-items">
            <h2>Contact us</h2>
            <Link to="/signup">How it works</Link>
            <Link to="/">Testimonials</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Investors</Link>
           
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Social media</h2>
            <Link to="/signup">How it works</Link>
            <Link to="/">Testimonials</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Investors</Link>

          </div>
          <div className="footer-link-items">
            <h2>Video</h2>
            <Link to="/signup">How it works</Link>
            <Link to="/">Testimonials</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Investors</Link>
            <Link to="/">Terms & Condition</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
            Travelogged <i className="fab fa-typo3"></i>
            </Link>
          </div>
          <small className="website-rights">Travelogged &#169; eyemabhishek 2021</small>
          <div className="social-icons">
            <Link
              to=""
              target="_blank"
              aria-label="Facebook"
              className="social-icon-link facebook"
            >
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link
              to="https://www.instagram.com/"
              target="_blank"
              aria-label="Instagram"
              className="social-icon-link instagram"
            >
              <i className="fab fa-instagram"></i>
            </Link>
            <Link
              to="/"
              target="_blank"
              aria-label="Twitter"
              className="social-icon-link twitter"
            >
              <i className="fab fa-twitter"></i>
            </Link>
            <Link
              to="/"
              target="_blank"
              aria-label="Youtube"
              className="social-icon-link youtube"
            >
              <i className="fab fa-youtube"></i>
            </Link>
            <Link
              to="/"
              target="_blank"
              aria-label="Linkedin"
              className="social-icon-link linkedin"
            >
              <i className="fab fa-linkedin"></i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
