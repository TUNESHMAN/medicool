import React from "react";

function Footer() {
  return (
    <footer>
      <div className="footer">
        <div>
          <h3>Contact Us</h3>
          <p>House 25, Rawlings Street</p>
          <p>Naughton, Dublin</p>
          <p>
            <i className="fas fa-tty"></i>+23412345678
          </p>
          <p>
            <i className="fas fa-phone-alt"></i>
          </p>
        </div>
        <div>
          <h3>Join Us</h3>
          <ul>
            <li>
              <i className="fab fa-facebook-square"></i>&nbsp;Facebook
            </li>
            <li>
              <i className="fab fa-twitter-square"></i>&nbsp;Twitter
            </li>
            <li>
              <i className="fab fa-instagram"></i>&nbsp;Instagram
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
            <li>Email Us: info@MineChore.com</li>
          </ul>
        </div>
      </div>

      <div class="copyright">
        <p>&copy;2019.Use My Tools. All right reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
