
import { Link } from "react-router-dom";



const Footer = () => {
    return (
      
        <div>
            <hr />
      <div>
        <p>LOGO</p>
        <ul>
          <li></li>
          <li>
            <Link to="">Support the project</Link>
          </li>
          <li>
            <Link to="">FAQ</Link>
          </li>
          <li>
            <Link to="">Terms of use</Link>
          </li>
          <li>
            <Link to="">Copyright holders</Link>
          </li>
        </ul>
      </div>
      <div>
        <div>
          <a href="https://www.apple.com/store">App Store</a>
          <a href="https://play.google.com/store/games?device=phone">
            Google play
          </a>
        </div>
        <ul>
          <li>
            <a href="https://github.com/">Github</a>
          </li>
          <li>
            <a href="https://web.telegram.org/">Telegram</a>
          </li>
          <li>
            <a href="https://www.facebook.com/">Facebook</a>
          </li>
          <li>
            <a href="https://www.instagram.com/">Instagram</a>
          </li>
          <li>
            <a href="https://twitter.com/?lang=ru">X</a>
          </li>
        </ul>
      </div>
      <p>
        2023 Filmoteka. All right reserved Created by <button type="button">TeamForce</button>
      </p>
    </div>
  );
};

export default Footer;
