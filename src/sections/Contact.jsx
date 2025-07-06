import React from "react";
import { FaEnvelope, FaGithub, FaBlogger } from "react-icons/fa";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "../motionVariants";

const contacts = [
  {
    icon: <FaEnvelope />,
    label: "Email",
    value: "1020blue@naver.com",
    link: "mailto:1020blue@naver.com"
  },
  {
    icon: <FaGithub />,
    label: "GitHub",
    value: "https://github.com/shin-yeseong/",
    link: "https://github.com/shin-yeseong/"
  },
  
];

export default function Contact() {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="relative w-full h-full flex flex-col items-center justify-start pt-32 md:pt-40 pb-24 overflow-hidden"
    >
      {/* bottom blurred blob */}
      <motion.div
        className="absolute bottom-[-120px] right-1/2 translate-x-1/2 w-[400px] h-[200px] rounded-full bg-lightSecondaryBg opacity-30 blur-2xl dark:bg-darkSecondaryBg"
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      />
      <motion.h2 variants={itemVariants} className="text-5xl font-extrabold text-darkBg dark:text-lightBg mb-12 tracking-tight z-10">Contact</motion.h2>
      <motion.div variants={containerVariants} className="flex flex-col gap-6 max-w-md w-full z-10">
        {contacts.map((c) => (
          <motion.a
            key={c.label}
            href={c.link}
            target="_blank"
            rel="noopener noreferrer"
            variants={itemVariants}
            className="flex items-center gap-4 px-8 py-5 rounded-2xl bg-lightSecondaryBg dark:bg-darkSecondaryBg border border-lightSecondaryBg dark:border-darkSecondaryBg shadow-none hover:shadow-lg transition text-lg font-semibold text-darkBg dark:text-lightBg hover:text-accentBlue dark:hover:text-accentBlue"
          >
            <span className="text-2xl text-darkSecondaryBg dark:text-lightSecondaryBg">{c.icon}</span>
            <span>{c.label}</span>
            <span className="ml-auto text-base text-darkSecondaryBg dark:text-lightSecondaryBg font-normal">{c.value}</span>
          </motion.a>
        ))}
      </motion.div>
      <motion.footer variants={itemVariants} className="absolute bottom-8 text-darkSecondaryBg dark:text-lightSecondaryBg text-xs text-center z-10">
        &copy; {new Date().getFullYear()} YeSeong Portfolio
      </motion.footer>
    </motion.section>
  );
}
