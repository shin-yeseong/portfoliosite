import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { containerVariants, itemVariants } from "../motionVariants";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

const list = [
  {
    title: "포트폴리오 웹사이트",
    img: "/images/portfolio.png",
    desc: "React와 Vite 기반의 반응형 포트폴리오. Framer Motion과 fullPage.js를 활용하여 동적 UX를 구현했습니다.",
    stack: ["React", "Vite", "Tailwind CSS", "Framer Motion", "fullPage.js"],
    github: "https://github.com/shin-yeseong/portfoliosite",
    demo: "https://yeseong.vercel.app",
  },
  {
    title: "FINEED (청년 금융 커뮤니티 앱)",
    img: "/images/fineed.png",
    desc: "React Native로 개발된 청년 금융 커뮤니티 앱. API를 연동하여 금융 정보, 퀴즈, 챌린지 등의 기능을 제공합니다.",
    stack: ["React Native", "Expo", "NativeWind", "Axios"],
    github: "https://github.com/CSID-DGU/2025-1-SCS4031-DevDumpling-S2",
    demo: null,
  },
  {
    title: "IF-CODE (전공 커뮤니티 사이트)",
    img: "/images/if-code.png",
    desc: "React와 Spring Boot 기반의 교육-IT 전공 커뮤니티. JWT 인증과 MongoDB를 활용한 Fullstack 프로젝트입니다.",
    stack: ["React", "Spring Boot", "MongoDB", "JWT", "Git"],
    github: "https://github.com/shin-yeseong/project_IF-CODE",
    demo: null,
  },
  {
    title: "REELVISION (영화 홍보/후원 플랫폼)",
    img: "/images/reelvision.svg",
    desc: "Django 템플릿 기반의 연극영화과 졸업작품 홍보 및 크라우드 펀딩 플랫폼. Toss Payments API를 연동했습니다.",
    stack: ["Django", "JavaScript", "HTML/CSS", "Toss Payments"],
    github: "https://github.com/CSID-DGU/2024-2-OSSProj-likemovie-02",
    demo: null,
  },
];

export default function Projects() {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="relative w-full h-full flex flex-col items-center justify-start pt-16 md:pt-40 pb-8 md:pb-24 overflow-hidden"
    >
      {/* floating blob background */}
      <motion.div
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full bg-lightSecondaryBg opacity-30 blur-2xl dark:bg-darkSecondaryBg"
        animate={{ y: [0, 30, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      />
      <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-darkBg dark:text-lightBg mb-12 md:mb-16 tracking-tight z-10">Projects</motion.h2>
      
      <div className="max-w-6xl w-full px-4 z-10">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
          breakpoints={{
            640: { // sm breakpoint
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: { // lg breakpoint
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
        >
          {list.map((p, i) => (
            <SwiperSlide key={i}>
              <motion.div
                variants={itemVariants}
                className="group rounded-3xl overflow-hidden bg-lightSecondaryBg/80 dark:bg-darkSecondaryBg/80 border border-lightSecondaryBg dark:border-darkSecondaryBg shadow-none hover:shadow-2xl transition-shadow duration-300 relative flex flex-col"
                whileHover={{ y: -12, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <div className="relative overflow-hidden h-56 flex items-center justify-center">
                  <Image
                    src={p.img}
                    alt={p.title}
                    layout="fill"
                    objectFit="cover"
                    className="group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
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
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </motion.section>
  );
}