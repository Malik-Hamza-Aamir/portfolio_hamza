import "./work.scss";
import GitHubIcon from "@mui/icons-material/GitHub";
import Ecom from "../../Assets/ecom.PNG";
import Fyp from "../../Assets/fyp.PNG";
import Portfolio from "../../Assets/portfolio.PNG";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const Work = () => {
  return (
    <>
      <section id="work">
        <div className="projects">
          <h2 className="work-heading">Some Things I've Built</h2>

          {/* project 1 */}
          <div className="projects-container">
            <div className="project-details-container">
              <h4 className="feat-d">Featured Project</h4>
              <h3 className="name-d">Ecommerce Store</h3>

              <div className="description-container">
                <p className="description">
                  A minimal, plain ecommerce website, basic Functionality of
                  this app was to display clothing products to users and the
                  user can buy a product easily by adding the product to card
                  and checkout.
                </p>
              </div>

              <div className="technology-list-container">
                <span className="technology-list-items">HTML/CSS</span>
                <span className="technology-list-items">React</span>
                <span className="technology-list-items">State-mgt</span>
                <span className="technology-list-items">Firebase</span>
              </div>

              <div className="codeview-container">
                <a className="github" href="https://github.com/Malik-Hamza-Aamir/Ecommerce">
                  {" "}
                  <GitHubIcon />{" "}
                </a>
                <a className="external-link" href="https://funny-blancmange-416f06.netlify.app">
                  {" "}
                  <OpenInNewIcon />{" "}
                </a>
              </div>
            </div>

            <div className="project-image-container">
              <a className="project-url" href="">
                <img className="project-image" src={Ecom} alt="ecommerce" />
              </a>
            </div>
          </div>

          {/* project 2 */}
          <div className="projects-container">
            <div className="project-details-container">
              <h4 className="feat-d">Featured Project</h4>
              <h3 className="name-d d">Dresscode Detection AI</h3>

              <div className="description-container">
                <p className="description">
                An AI project made to detect defaulters dress code and assign
                  a fine to defaulters name. The App detects defaulters using
                  YOLOv5 Algorithm, capture their image and display it on the
                  admins screen. The live stream is continuously shown on admin
                  screen where one can monitor live detection.
                </p>
              </div>

              <div className="technology-list-container">
                <span className="technology-list-items">HTML/CSS</span>
                <span className="technology-list-items">React</span>
                <span className="technology-list-items">State-mgt</span>
                <span className="technology-list-items">Firebase</span>
              </div>

              <div className="codeview-container">
                <a className="github" href="https://github.com/Malik-Hamza-Aamir/DresscodeInspectionAI">
                  {" "}
                  <GitHubIcon />{" "}
                </a>
                <a className="external-link" href="https://darling-queijadas-16d49b.netlify.app">
                  {" "}
                  <OpenInNewIcon />{" "}
                </a>
              </div>
            </div>

            <div className="project-image-container">
              <a className="project-url" href="">
                <img className="project-image" src={Fyp} alt="AI" />
              </a>
            </div>
          </div>

          {/* project 3 */}
          <div className="projects-container">
            <div className="project-details-container">
              <h4 className="feat-d">Featured Project</h4>
              <h3 className="name-d">Portfolio </h3>

              <div className="description-container">
                <p className="description">
                  A very basic and minimal portfolio website made to show the wonders of React JS. Also showing the design capability one holds and some projects made to advocate in the case further.                  
                </p>
              </div>

              <div className="technology-list-container">
                <span className="technology-list-items">HTML/CSS</span>
                <span className="technology-list-items">React</span>
                <span className="technology-list-items">State-mgt</span>
                <span className="technology-list-items">Firebase</span>
              </div>

              <div className="codeview-container">
                <a className="github" href="https://github.com/Malik-Hamza-Aamir/portfolio_hamza">
                  {" "}
                  <GitHubIcon />{" "}
                </a>
                <a className="external-link" href="https://soft-parfait-39713b.netlify.app">
                  {" "}
                  <OpenInNewIcon />{" "}
                </a>
              </div>
            </div>

            <div className="project-image-container">
              <a className="project-url" href="">
                <img
                  className="project-image"
                  src={Portfolio}
                  alt="portfolio"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Work;
