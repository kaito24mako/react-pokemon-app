import github from "../../assets/socials/github.png";
import facebook from "../../assets/socials/facebook.png";
import instagram from "../../assets/socials/instagram.png";

function Footer() {
  return (
    <div className="footer-container">
      <p>
        All information and images presented on this website about the Pokémon
        Trading Card Game is intellectual property of The Pokémon Company, Game
        Freak, Nintendo, Creatures and/or Wizards of the Coast. These companies
        did not produce, endorse, support, or affiliate with Search ém All!{" "}
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
