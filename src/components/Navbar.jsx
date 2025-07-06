import React, { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

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
  return (
    <nav className="fixed top-6 right-4 z-50"> {/* Position top-right */}
      <DarkModeToggle />
    </nav>
  );
};