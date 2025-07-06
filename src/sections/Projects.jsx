import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { containerVariants, itemVariants } from "../motionVariants";

const list = [
  {
    title: "금융 커뮤니티 앱",
    img: "/thumb1.jpg",
    desc: "실시간 금융 정보와 커뮤니티 기능을 제공하는 SPA 웹앱.",
    stack: ["React", "Tailwind", "Framer Motion"],
    github: "https://github.com/yourgithub/finance-app",
    demo: "https://finance-app-demo.com"
  },
  {
    title: "포트폴리오 사이트",
    img: "/thumb2.jpg",
    desc: "개인 이력과 프로젝트를 소개하는 반응형 포트폴리오.",
    stack: ["React", "Tailwind", "Framer Motion"],
    github: "https://github.com/yourgithub/portfolio",
    demo: "https://portfolio-demo.com"
  },
  // 추가 프로젝트...
];

export default function Projects() {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="relative w-full h-full flex flex-col items-center justify-start pt-32 md:pt-40 pb-24 overflow-hidden"
    >
      {/* floating blob background */}
      <motion.div
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full bg-lightSecondaryBg opacity-30 blur-2xl dark:bg-darkSecondaryBg"
        animate={{ y: [0, 30, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      />
      <motion.h2 variants={itemVariants} className="text-5xl font-extrabold text-darkBg dark:text-lightBg mb-16 tracking-tight z-10">Projects</motion.h2>
      <motion.div
        variants={containerVariants}
        className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl w-full px-4 z-10"
      >
        {list.map((p, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            className="group rounded-3xl overflow-hidden bg-lightSecondaryBg/80 dark:bg-darkSecondaryBg/80 border border-lightSecondaryBg dark:border-darkSecondaryBg shadow-none hover:shadow-2xl transition-shadow duration-300 relative flex flex-col"
            whileHover={{ y: -12, scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <div className="relative overflow-hidden h-56 flex items-center justify-center">
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-lightBg text-sm mb-2">{p.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.stack.map((s) => (
                      <span key={s} className="px-2 py-1 rounded-full bg-white/20 text-lightBg text-xs font-semibold backdrop-blur-sm">{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6 flex flex-col gap-2 flex-1 bg-lightSecondaryBg dark:bg-darkSecondaryBg">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xl font-bold text-darkBg dark:text-lightBg">{p.title}</span>
                {p.github && (
                  <a href={p.github} target="_blank" rel="noopener noreferrer" className="text-darkSecondaryBg dark:text-lightSecondaryBg hover:text-darkBg dark:hover:text-lightBg transition"><FaGithub /></a>
                )}
                {p.demo && (
                  <a href={p.demo} target="_blank" rel="noopener noreferrer" className="text-darkSecondaryBg dark:text-lightSecondaryBg hover:text-accentBlue dark:hover:text-accentBlue transition"><FaExternalLinkAlt /></a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
