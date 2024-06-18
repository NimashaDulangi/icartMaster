import React from "react";
import './footer.css'

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-section">
          <h2>About Us</h2>
          <p>Welcome to iCartMaster, your top choice for products tailored to the needs of the visually impaired. Our curated selection enhances accessibility and convenience, empowering independence in daily life.
</p>
        </div>
        <div className="footer-section">
          <h2>Contact Us</h2>
          <address>
            Email: <a href="mailto:contact@example.com">contact@iCartMaster.com</a>
          </address>
        </div>
        <div className="footer-section">
          <h2>Quick Links</h2>
          <ul>
            <li>
              <a href="/items">Home</a>
            </li>
            <li>
              <a href="/products">Products</a>
            </li>
            <li>
              <a href="/feedback">Feedbacks</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 iCartMaster. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
