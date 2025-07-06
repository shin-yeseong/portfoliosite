import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";

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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onHash = () => {
      const hash = window.location.hash.replace("#", "");
      setActive(hash || "home");
      setIsMobileMenuOpen(false); // 메뉴 클릭 시 모바일 메뉴 닫기
    };
    window.addEventListener("hashchange", onHash);
    onHash();
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-full px-4 md:w-[90vw] md:max-w-4xl z-50 rounded-2xl bg-lightSecondaryBg/80 dark:bg-darkSecondaryBg/80 backdrop-blur-md shadow-lg dark:shadow-darkBg/50 border border-lightSecondaryBg dark:border-darkSecondaryBg md:px-8 py-3 flex items-center justify-between">
      <div className="text-xl font-extrabold tracking-tight text-darkBg dark:text-lightBg select-none">YeSeong</div>
      
      {/* Desktop Menu */}
      <ul className="hidden sm:flex items-center space-x-2 md:space-x-8 text-base font-semibold text-darkSecondaryBg dark:text-lightSecondaryBg">
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

      {/* Mobile Menu Toggle */}
      <div className="sm:hidden flex items-center">
        <DarkModeToggle />
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
          className="p-2 rounded-full text-darkSecondaryBg dark:text-lightSecondaryBg hover:bg-lightSecondaryBg/50 dark:hover:bg-darkBg/50 transition-colors ml-2"
        >
          {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 w-full bg-lightSecondaryBg/90 dark:bg-darkSecondaryBg/90 backdrop-blur-md shadow-lg rounded-b-2xl py-4 sm:hidden"
          >
            <ul className="flex flex-col items-center space-y-4 text-base font-semibold text-darkSecondaryBg dark:text-lightSecondaryBg">
              {NAV.map((item) => (
                <li key={item.anchor}>
                  <a
                    href={`#${item.anchor}`}
                    className="block py-2 px-4 hover:text-accentBlue dark:hover:text-lightBg transition"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
