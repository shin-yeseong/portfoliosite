import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiSun, FiMoon } from "react-icons/fi";

const NAV = [
  { label: "Home", anchor: "home" },
  { label: "About", anchor: "aboutme" },
  { label: "Skills", anchor: "skills" },
  { label: "Projects", anchor: "projects" },
  { label: "Education", anchor: "experience" },
  { label: "Contact", anchor: "contact" },
];

const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDark(savedTheme === "dark");
    } else {
      setIsDark(prefersDark);
    }
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <button 
      onClick={() => setIsDark(!isDark)} 
      className="p-2 rounded-full text-darkSecondaryBg dark:text-lightSecondaryBg hover:bg-lightSecondaryBg/50 dark:hover:bg-darkBg/50 transition-colors"
    >
      {isDark ? <FiSun /> : <FiMoon />}
    </button>
  );
};

export default function Navbar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onHash = () => {
      const hash = window.location.hash.replace("#", "");
      setActive(hash || "home");
    };
    window.addEventListener("hashchange", onHash);
    onHash();
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[90vw] max-w-4xl z-50 rounded-2xl bg-lightSecondaryBg/80 dark:bg-darkSecondaryBg/80 backdrop-blur-md shadow-lg dark:shadow-darkBg/50 border border-lightSecondaryBg dark:border-darkSecondaryBg px-8 py-3 flex items-center justify-between">
      <div className="text-xl font-extrabold tracking-tight text-darkBg dark:text-lightBg select-none">YeSeong</div>
      <ul className="flex items-center space-x-8 text-base font-semibold text-darkSecondaryBg dark:text-lightSecondaryBg">
        {NAV.map((item) => (
          <li key={item.anchor} className="relative">
            <a
              href={`#${item.anchor}`}
              className={`relative px-1 pb-1 transition ${active === item.anchor ? "text-accentBlue dark:text-lightBg" : "hover:text-darkBg dark:hover:text-lightBg"}`}
            >
              {item.label}
              {active === item.anchor && (
                <motion.span
                  layoutId="underline"
                  className="absolute left-0 bottom-0 h-0.5 bg-accentBlue dark:bg-lightBg"
                />
              )}
            </a>
          </li>
        ))}
        <li className="ml-4">
          <DarkModeToggle />
        </li>
      </ul>
    </nav>
  );
};
