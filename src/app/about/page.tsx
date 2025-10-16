"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="min-h-screen bg-[#0f172a] text-white px-6 py-16">
      <motion.div
        className="max-w-3xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
         <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          About <span className="text-teal-400">Me</span>
        </h2>

       <p className="text-gray-300 leading-relaxed mb-4"> Hi, I'm Misha Babar - a passionate front-end developer and AI enthusiast based in Karachi. I design and build modern, responsive, and user-friendly web interfaces using HTML, CSS, Tailwind, JavaScript, and React. </p> <p className="text-gray-300 leading-relaxed mb-4"> I love combining creativity with technology to bring ideas to life. My focus is on clean design, smooth animations, and seamless user experiences that feel natural and interactive. </p> <p className="text-gray-300 leading-relaxed mb-4"> Currently, I’m expanding my skills in AI-driven systems, prompt engineering, and context understanding through the Governor House Artificial Intelligence Program. I also work on building AI agent applications and learning tools like Agent SDK and SpecKit to integrate smart features into web apps. </p> <p className="text-gray-300 leading-relaxed mb-6"> I value creativity, collaboration, and continuous learning. My goal is to merge design and AI to create intelligent digital experiences that inspire and simplify people’s lives. </p>

        <a
          href="/Misha-CV.pdf"
          download
          className="inline-block bg-teal-500 hover:bg-teal-600 text-white font-medium py-2 px-6 rounded-xl transition duration-300"
        >
          Download My CV
        </a>
      </motion.div>
    </section>
  );
}
