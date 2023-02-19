import Leftlink from "./Components/left-links/Leftlink";
import Rightmail from "./Components/right-email/Rightmail";
import Navbar from "./Sections/Navbar/Navbar";
import Hero from "./Components/hero/Hero";
import "./app.scss";
import About from "./Sections/About/About";
import Work from "./Sections/Work/Work";
import Contact from "./Sections/Contact/Contact";

const App = () => {
  return (
    <>
      <Navbar />
      <Leftlink />
      <Rightmail />
      
      <Hero />
      <About />
      <Work />
      <Contact />
    </>
  );
};

export default App;
