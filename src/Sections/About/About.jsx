import "./about.scss";
import Profile from "../../Assets/profile.jpeg";

const About = () => {
  return (
    <>
      <section id="about">
        <div className="about-container">
          <div className="about-fcontainer">
            <h2 className="abt-heading">About Me</h2>

            <div className="abt-info-container">
              <div className="personal-info">
                <p className="abt-para1">
                  Looking for a software developer who can take your online
                  presence to the next level? You've found me!
                </p>

                <p className="abt-para2">
                  Hi, I am Hamza, a highly skilled developer with a deep
                  understanding of web development technologies and frameworks,
                  I have the expertise to build custom web applications that
                  meet your specific business needs.
                </p>

                <p className="abt-para3">
                  Whether you're looking for a sleek and modern e-commerce
                  platform or a robust content management system, I have the
                  skills to create a functional and user-friendly web
                  application that will exceed your expectations.
                </p>

                <p className="abt-para4">
                  But I'm not just a web developer - I'm a problem solver. I'm
                  passionate about finding innovative solutions to complex
                  problems and ensuring that my clients receive the highest
                  quality work.
                </p>

                <p className="abt-para5">
                  So if you're looking for a web application developer who can
                  help take your online presence to the next level, look no
                  further than me. Let's work together to create a powerful and
                  engaging web application that will drive your business
                  forward.
                </p>

                <div className="skills-container">
                  <div className="skill-list">
                    <ol className="skill-container">
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>Javascript</li>
                    </ol>
                  </div>

                  <div className="skill-list">
                    <ol className="skill-container">
                      <li>React JS</li>
                      <li>Git / Github</li>
                      <li>WordPress</li>
                    </ol>
                  </div>
                </div>
              </div>

              <div className="profile-img">
                  <img className="my-pic" src={Profile} alt="img" />
                  <div className="pic-back-border" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
