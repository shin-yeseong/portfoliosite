import React from "react";
import { motion } from "framer-motion";
import { FaUniversity, FaLaptopCode, FaUserGraduate } from "react-icons/fa";
import { containerVariants, itemVariants } from "../motionVariants";

const education = {
  university: "동국대학교",
  major: "교육학과 / 융합소프트웨어 (복수전공)",
  period: "2019.03 - 2025.08 (졸업예정)",
  desc: "교육의 가치와 소프트웨어 기술을 융합하여 사용자에게 더 나은 학습 경험을 제공하는 것에 관심을 가지고 공부했습니다. 웹 개발, 자료구조, 알고리즘 등 핵심 CS 지식을 쌓았으며, 교육 콘텐츠 개발 프로젝트에 참여하며 실무 역량을 길렀습니다.",
  courses: [
    "웹 프로그래밍",
    "자료구조와 알고리즘",
    "데이터베이스 시스템",
    "객체지향 프로그래밍",
    "컴퓨터 네트워크",
  ],
};

export default function Education() {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="relative w-full h-full flex flex-col items-center justify-start pt-24 md:pt-40 pb-16 md:pb-24 overflow-hidden"
    >
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-grid-lightSecondaryBg/50 dark:bg-darkSecondaryBg/50 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        style={{ zIndex: 0 }}
      />
      <motion.div
        variants={itemVariants}
        className="z-10"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-darkBg dark:text-lightBg mb-4 tracking-tight">Education</h2>
        <p className="text-base md:text-lg text-darkSecondaryBg dark:text-lightSecondaryBg text-center">배움의 여정과 성장 기록</p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        className="relative max-w-3xl w-full mt-16 z-10"
      >
        {/* Timeline Line */}
        <div className="absolute left-1/2 -translate-x-1/2 h-full w-1 bg-lightSecondaryBg dark:bg-darkSecondaryBg rounded-full" />

        {/* Timeline Item */}
        <motion.div className="relative flex items-start gap-8" variants={itemVariants}>
          <div className="absolute left-1/2 -translate-x-1/2 mt-1 w-8 h-8 bg-lightBg dark:bg-darkBg rounded-full border-4 border-accentBlue dark:border-lightSecondaryBg flex items-center justify-center z-10">
            <FaUserGraduate className="text-accentBlue dark:text-lightSecondaryBg" />
          </div>
          <div className="bg-lightSecondaryBg/80 dark:bg-darkSecondaryBg/80 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-lg border border-lightSecondaryBg dark:border-darkSecondaryBg w-full">
            <p className="text-xs md:text-sm font-semibold text-accentBlue dark:text-lightSecondaryBg mb-1">{education.period}</p>
            <h3 className="text-xl md:text-2xl font-bold text-darkBg dark:text-lightBg">{education.university}</h3>
            <p className="text-sm md:text-md text-darkSecondaryBg dark:text-lightSecondaryBg font-medium mb-4">{education.major}</p>
            <p className="text-sm md:text-base text-darkSecondaryBg dark:text-lightSecondaryBg leading-relaxed mb-4 md:mb-6">{education.desc}</p>
            
            <h4 className="font-bold text-darkBg dark:text-lightBg mb-3 flex items-center gap-2">
              <FaLaptopCode />
              주요 수강 과목
            </h4>
            <motion.div variants={containerVariants} className="flex flex-wrap gap-2">
              {education.courses.map((course) => (
                <motion.span
                  key={course}
                  variants={itemVariants}
                  className="px-3 py-1 rounded-full bg-lightSecondaryBg dark:bg-darkBg text-darkBg dark:text-lightBg text-sm font-medium border border-lightSecondaryBg dark:border-darkSecondaryBg"
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  {course}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}