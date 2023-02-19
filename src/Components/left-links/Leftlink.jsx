import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

import "./leftlink.scss";

const Leftlink = () => {
  return (
    <>
      <div className="leftbar-container">
        <ul className="line-element">
          <li className="mlink">
            <a className="link" href="https://github.com/Malik-Hamza-Aamir">
              <GitHubIcon />
            </a>
          </li>

          <li className="mlink">
            <a className="link" href="https://www.linkedin.com/in/hamza-aamir-498783208/">
              <LinkedInIcon />
            </a>
          </li>

          <li className="mlink">
            <a className="link" href="https://www.instagram.com/this_is_hamza_/">
              <InstagramIcon />
            </a>
          </li>

          <li className="mlink">
            <a className="link" href="https://twitter.com/Hamzaaa60538596">
              <TwitterIcon />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Leftlink;
