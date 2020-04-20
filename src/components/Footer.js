import React from "react";
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaPhone} from 'react-icons/fa';

function Footer() {
  return (
    <footer>
      <div className="footer">
        <div>
          <h3>Contact Us</h3>
          <p>House 25, Rawlings Street</p>
          <p>Naughton, Dublin</p>
          <p>
            <FaPhone/>+23412345678
          </p>
        </div>
        <div>
          <h3>Join Us</h3>
          <ul>
            <li>
              <FaFacebook/>&nbsp;Facebook
            </li>
            <li>
              <FaTwitter/>&nbsp;Twitter
            </li>
            <li>
              <FaInstagram/>&nbsp;Instagram
            </li>
          </ul>
        </div>

        <div>
          <h3>Company</h3>
          <ul>
            <li>About</li>
            <li>Blog</li>
            <li>Partners</li>
            <li>Privacy</li>
            <li>Terms and conditions</li>
          </ul>
        </div>

        <div>
          <h3>Help</h3>
          <ul>
            <li>Contact</li>
            <li>FAQ</li>
            <li>Create Chore</li>
            <li>Check Points</li>
            <li>Email Us: info@mediCool.com</li>
          </ul>
        </div>
      </div>

      <div class="copyright">
        <p>&copy;2020.mediCool. All right reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
