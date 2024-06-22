import { useState } from "react";
import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Team from "./components/Team/Team";
import WhatWeDo from "./components/WhatWeDo/WhatWeDo";

import { Link, animateScroll as scroll } from "react-scroll";
import NavbarDark from "./components/NavbarDark/NavbarDark";
import HomeDark from "./components/HomeDark/HomeDark";
import AboutDark from "./components/AboutDark/AboutDark";
import WhatWeDoDark from "./components/WhatWeDoDark/WhatWeDoDark";
import TeamDark from "./components/TeamDark/TeamDark";
import ContactDark from "./components/ContactDark/ContactDark";

function App() {
  const [isToggled, setIsToggled] = useState(false);

  const toggleDarkMode = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div className={isToggled ? "dark-mode app" : "light-mode app"}>
      {isToggled ? <NavbarDark id="navbar" /> : <Navbar id="navbar" />}
      {isToggled ? <HomeDark id="home" /> : <Home id="home" />}
      {isToggled ? <AboutDark id="about" /> : <About id="about" />}
      {isToggled ? (
        <WhatWeDoDark id="what-we-do" />
      ) : (
        <WhatWeDo id="what-we-do" />
      )}
      {isToggled ? <TeamDark id="team" /> : <Team id="team" />}
      {isToggled ? <ContactDark id="contact" /> : <Contact id="contact" />}
      <div
        className={isToggled ? "light-mode-btn" : "dark-mode-btn"}
        onClick={toggleDarkMode}
      />
    </div>
  );
}

export default App;
