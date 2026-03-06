import github from "../../assets/github.png";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";

import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum placeat
        laboriosam nihil ex dolorem sint assumenda nulla optio necessitatibus ad
        numquam soluta veritatis, corrupti, suscipit dolore exercitationem sequi
        consequatur consequuntur quia neque eos incidunt. Praesentium nulla
        dolorum sed unde voluptate.
      </p>
      <div className="footer-wrapper">
        <div className="copyright">
          <p>© 2026 Kaito Watanabe</p>
        </div>
        <div className="social-links">
          <a href="https://github.com/" target="_blank">
            <img
              src={github}
              alt="Link to my GitHub"
              className="social-image"
            />
          </a>
          <a href="https://www.facebook.com/" target="_blank">
            <img
              src={facebook}
              alt="Link to my Facebook"
              className="social-image"
            />
          </a>
          <a href="https://www.instagram.com/kaito24mako/" target="_blank">
            <img
              src={instagram}
              alt="Link to my Instagram"
              target="_blank"
              className="social-image"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
