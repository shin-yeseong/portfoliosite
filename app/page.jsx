"use client";

import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";

import Navbar from "../src/components/Navbar";
import Hero from "../src/sections/Hero";
import AboutMe from "../src/sections/AboutMe";
import Skills from "../src/sections/Skills";
import Projects from "../src/sections/Projects";
import Experience from "../src/sections/Education.jsx";
import Contact from "../src/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <ReactFullpage
        licenseKey={"OPEN-SOURCE-GPLV3-LICENSE"}
        navigation
        anchors={["home", "aboutme", "skills", "projects", "experience", "contact"]}
        scrollingSpeed={700}
        keyboardScrolling={true}
        scrollOverflow={true}
        normalScrollElements=".fp-auto-scroll"
        render={() => (
          <ReactFullpage.Wrapper>
            <div className="section dark:bg-darkBg" data-anchor="home">
              <Hero />
            </div>
            <div className="section dark:bg-darkBg" data-anchor="aboutme">
              <AboutMe />
            </div>
            <div className="section dark:bg-darkBg" data-anchor="skills">
              <Skills />
            </div>
            <div className="section dark:bg-darkBg" data-anchor="projects">
              <Projects />
            </div>
            <div className="section dark:bg-darkBg" data-anchor="experience">
              <Experience />
            </div>
            <div className="section dark:bg-darkBg" data-anchor="contact">
              <Contact />
            </div>
          </ReactFullpage.Wrapper>
        )}
      />
    </>
  );
}
