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
        <p className="text-gray-300 leading-relaxed mb-4">
          Hi, I'm Misha Babar—a front‑end web developer based in Karachi. I build user‑friendly, responsive web apps using React, Tailwind, and JavaScript.
        </p>
        <p className="text-gray-300 leading-relaxed mb-4">
          With projects ranging from modern portfolios to interactive UIs, my focus is on clean design and smooth user experience. I’m committed to writing reusable, maintainable code and constantly refining my craft.
        </p>
        <p className="text-gray-300 leading-relaxed mb-6">
          I value creativity, responsibility, and collaboration—approaching every project with enthusiasm and precision to deliver real results.
        </p>
        <a
          href="/Misha‑CV.pdf"
          download
          className="inline-block bg-teal-500 hover:bg-teal-600 text-white font-medium py-2 px-6 rounded-xl transition duration-300"
        >
          Download my CV
        </a>
      </motion.div>
    </section>
  );
}