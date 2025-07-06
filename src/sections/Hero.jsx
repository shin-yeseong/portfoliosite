import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { FaReact, FaCss3Alt, FaJava } from "react-icons/fa";
import { SiTailwindcss, SiSpring } from "react-icons/si";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, when: "beforeChildren" }
  }
};
const itemUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function Hero() {
  const [text] = useTypewriter({
    words: ["성장을 즐기는", "문제 해결을 즐기는", "사용자를 먼저 생각하는"],
    loop: true,
    delaySpeed: 2000,
  });

  // fullpage.js의 active section 감지 (window.location.hash)
  const [showScroll, setShowScroll] = useState(true);
  useEffect(() => {
    const onHash = () => setShowScroll(window.location.hash === "#home" || window.location.hash === "");
    window.addEventListener("hashchange", onHash);
    onHash();
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* 여러 animated blob */}
      <motion.div
        className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] rounded-full bg-lightSecondaryBg opacity-40 blur-3xl dark:bg-darkSecondaryBg"
        animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-150px] right-[-150px] w-[400px] h-[400px] rounded-full bg-lightSecondaryBg opacity-30 blur-2xl dark:bg-darkSecondaryBg"
        animate={{ x: [0, -30, 0], y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-lightSecondaryBg opacity-30 blur-2xl dark:bg-darkSecondaryBg"
        animate={{ scale: [1, 1.05, 1], rotate: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 16, ease: "easeInOut" }}
      />
      {/* 중앙 Hero */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <motion.div
          className="max-w-3xl"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-darkBg dark:text-lightBg mb-8 drop-shadow-sm"
            variants={itemUp}
          >
            <span className="text-accentBlue dark:text-lightSecondaryBg">{text}</span>
            <Cursor cursorColor='#0A84FF' />
            <span className="block mt-4">개발자 신예성입니다.</span>
          </motion.h1>
          <motion.p
            className="text-base sm:text-lg md:text-2xl text-darkSecondaryBg dark:text-lightSecondaryBg mb-10 leading-relaxed"
            variants={itemUp}
          >
            사용자의 문제를 기술로 해결하며 더 나은 경험을 만드는 개발자입니다.
          </motion.p>
          <motion.div className="flex flex-col sm:flex-row gap-4 mb-10 justify-center" variants={itemUp}>
            <a
              href="#projects"
              className="px-8 py-3 rounded-full bg-darkBg dark:bg-accentBlue text-lightBg font-semibold hover:bg-darkSecondaryBg dark:hover:bg-accentBlue transition shadow-md hover:shadow-lg"
            >
              프로젝트 살펴보기
            </a>
            <a
              href="#contact"
              className="px-8 py-3 rounded-full border border-lightSecondaryBg dark:border-darkSecondaryBg text-darkBg dark:text-lightBg font-medium hover:bg-lightSecondaryBg dark:hover:bg-darkSecondaryBg transition shadow-md hover:shadow-lg"
            >
              연락하기
            </a>
          </motion.div>
          <motion.div className="flex space-x-8 mt-4 justify-center text-darkSecondaryBg dark:text-lightSecondaryBg" variants={itemUp}>
            <FaReact size={40} />
            <SiTailwindcss size={40} />
            <FaCss3Alt size={40} />
            <FaJava size={40} />
            <SiSpring size={40} />
          </motion.div>
        </motion.div>
        {/* Scroll down indicator: 첫 화면에서만 보이게 */}
        <AnimatePresence>
          {showScroll && (
            <motion.div
              className="absolute bottom-10 w-full flex flex-col items-center opacity-70"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="animate-bounce text-3xl text-darkSecondaryBg dark:text-lightSecondaryBg">↓</div>
              <span className="text-xs text-darkSecondaryBg dark:text-lightSecondaryBg mt-1">Scroll</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
