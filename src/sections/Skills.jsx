import React from "react";
import {
  FaReact, FaGithub, FaJs, FaHtml5, FaCss3Alt, FaJava
} from "react-icons/fa";
import {
  SiTailwindcss, SiMongodb, SiMysql, SiExpo, SiSpring
} from "react-icons/si";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "../motionVariants";

const skills = [
  // Frontend
  { icon: <FaReact />, label: "React", type: "Frontend" },
  { icon: <FaJs />, label: "JavaScript", type: "Frontend" },
  { icon: <SiTailwindcss />, label: "Tailwind CSS", type: "Frontend" },
  { icon: <FaHtml5 />, label: "HTML5", type: "Frontend" },
  { icon: <FaCss3Alt />, label: "CSS3", type: "Frontend" },
  // Mobile
  { icon: <FaReact />, label: "React Native", type: "Mobile" },
  { icon: <SiExpo />, label: "Expo", type: "Mobile" },
  // Backend
  { icon: <FaJava />, label: "Java", type: "Backend" },
  { icon: <SiSpring />, label: "Spring", type: "Backend" },
  { icon: <SiMongodb />, label: "MongoDB", type: "Backend" },
  { icon: <SiMysql />, label: "MySQL", type: "Backend" },
  // Tool
  { icon: <FaGithub />, label: "GitHub", type: "Tool" },
];

const categories = [
  { name: "Frontend", color: "from-indigo-200 to-blue-100" },
  { name: "Mobile", color: "from-sky-200 to-cyan-100" },
  { name: "Backend", color: "from-green-200 to-teal-100" },
  { name: "Tool", color: "from-yellow-200 to-pink-100" },
];

function SkillCard({ icon, label }) {
  return (
    <motion.div
      variants={itemVariants}
      className="flex flex-col items-center justify-center p-3 sm:p-4 md:p-6 bg-white/60 dark:bg-darkSecondaryBg/60 rounded-2xl border border-gray-100 dark:border-slate-700 shadow-lg hover:shadow-xl transition-shadow duration-300 group w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40"
      whileHover={{ scale: 1.08, y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="text-3xl sm:text-4xl md:text-5xl mb-2 sm:mb-4 text-gray-500 dark:text-gray-400 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-300">
        {icon}
      </div>
      <span className="text-sm sm:text-base font-bold text-gray-800 dark:text-white text-center">{label}</span>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
                  className="relative w-full h-full flex flex-col items-center justify-center py-12 md:py-24 overflow-hidden"
    >
      <motion.div
        className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-indigo-300 via-blue-200 to-purple-200 dark:from-indigo-800 dark:via-blue-700 dark:to-purple-800 opacity-60"
        animate={{ x: [0, 40, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      />
      <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-12 md:mb-16 tracking-tight z-10">Skills</motion.h2>
      <motion.div variants={itemVariants} className="flex flex-col gap-6 md:gap-8 w-full max-w-5xl z-10 px-4 max-h-full overflow-y-auto fp-auto-scroll">
        {categories.map((cat) => (
          <div key={cat.name}>
            <motion.h3
              variants={itemVariants}
              className="text-lg sm:text-xl md:text-2xl font-bold text-darkBg dark:text-lightBg mb-4 md:mb-6 pl-2"
            >
              {cat.name}
            </motion.h3>
            <motion.div variants={containerVariants} className="flex flex-wrap gap-3 sm:gap-4 md:gap-6 justify-center">
              {skills.filter(s => s.type === cat.name).map((s) => (
                <SkillCard key={s.label} {...s} />
              ))}
            </motion.div>
          </div>
        ))}
      </motion.div>
    </motion.section>
  );
}
