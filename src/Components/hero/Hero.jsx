import "./hero.scss";

const Hero = () => {
  return (
    <>
      <div className="hero-container">
        <div className="hero-text">
          <span>Hi, my name is</span>
          <h2 className="name">HAMZA AAMIR.</h2>
          <h2 className="i-do">I build things for the web.</h2>
          <p className="i-do-info">
            I'm a software engineer specializing in building (and occasionally
            designing) exceptional digital experiences. Currently, I'm focused
            on building accessible, human-centered products.
          </p>
          <a href="resume.pdf" download="resume.pdf">
          <button className="btn">Hire me!</button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Hero;
