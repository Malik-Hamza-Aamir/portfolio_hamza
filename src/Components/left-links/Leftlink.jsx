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
            <a className="link" href="#">
              <GitHubIcon />
            </a>
          </li>

          <li className="mlink">
            <a className="link" href="#">
              <LinkedInIcon />
            </a>
          </li>

          <li className="mlink">
            <a className="link" href="#">
              <InstagramIcon />
            </a>
          </li>

          <li className="mlink">
            <a className="link" href="#">
              <TwitterIcon />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Leftlink;
