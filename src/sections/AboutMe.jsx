import React from "react";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "../motionVariants";

export default function AboutMe() {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
            className="relative w-full h-full flex flex-col items-center justify-start pt-24 md:pt-40 pb-16 md:pb-24 overflow-hidden"
    >
      <motion.img
        variants={itemVariants}
        src="/profile.jpg" alt="Profile" 
        className="w-48 h-48 object-contain mb-8 rounded-full shadow-lg border-4 border-lightSecondaryBg dark:border-darkSecondaryBg"
      />
      {/* 한 줄 소개 */}
      <motion.h2
        variants={itemVariants}
        className="text-2xl md:text-5xl font-extrabold text-darkBg dark:text-lightBg mb-1 text-center"
      >
        성장을 즐기는 개발자, 신예성입니다
      </motion.h2>
      {/* 주요 키워드 */}
      <motion.div
        variants={itemVariants}
        className="flex gap-4 mb-8 justify-center text-2xl text-darkSecondaryBg dark:text-lightSecondaryBg"
      >
       
      </motion.div>
      {/* 간단 자기소개 + 학력 */}
      <motion.p
        variants={itemVariants}
        className="max-w-4xl text-base md:text-lg text-darkSecondaryBg dark:text-lightSecondaryBg text-center leading-relaxed mb-2"
      >
        안녕하세요! React 기반의 프론트엔드 기술로 사용자에게 직관적이고 즐거운 인터랙티브 UI를 만드는 것을 즐깁니다.
      </motion.p>
      <motion.p
        variants={itemVariants}
        className="max-w-4xl text-base md:text-lg text-darkSecondaryBg dark:text-lightSecondaryBg text-center leading-relaxed mb-2"
      >
        단순히 화면을 구현하는 것을 넘어, 사용자가 겪는 문제를 발견하고 이를 기술로 해결하기 위해 고민합니다.
      </motion.p>
      <motion.p
        variants={itemVariants}
        className="max-w-4xl text-base md:text-lg text-darkSecondaryBg dark:text-lightSecondaryBg text-center leading-relaxed mb-2"
      >
        안정적이고 편리한 서비스를 위해 백엔드 영역에도 꾸준히 관심을 가지고 학습하며, 더 나은 기능과 사용자 경험을 만들어 나갑니다.
      </motion.p>
      <motion.p
        variants={itemVariants}
        className="max-w-4xl text-base md:text-lg text-darkSecondaryBg dark:text-lightSecondaryBg text-center leading-relaxed mb-2"
      >
        교육학과 소프트웨어 융합 전공 지식을 바탕으로 사용자 관점에서 문제를 이해하고,
        이를 더 나은 경험으로 연결하는 개발자가 되고자 노력하고 있습니다.
      </motion.p>
    </motion.section>
  );
} 