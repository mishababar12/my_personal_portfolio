"use client";

import Image from "next/image";
import ish from "../../public/image/ish.jpg";
import { motion } from "framer-motion";
import Testimonials from "../components/testimonials";
import About from "@/components/about";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Blog from "@/components/blog";
import Contact from "@/components/contact";

export default function Home() {
return (
  <div>
    {/* Hero / Intro Section */}
    <section className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white flex items-center justify-center px-4">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-12 py-12">

        {/* Text Section */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4">
            Hi, I'm <span className="text-teal-400">Misha Babar</span>
            <br />
            <span className="text-2xl sm:text-3xl font-semibold mt-2 block text-teal-300">
              Front-End Web Developer & AI Enthusiast
            </span>
          </h1>

          <p className="text-base leading-relaxed max-w-lg mx-auto md:mx-0 mb-6 text-gray-300 font-light">
            I create elegant, responsive, and user-friendly web experiences using 
            <span className="text-teal-400"> HTML, CSS, Tailwind, JavaScript</span>, and 
            <span className="text-teal-400"> React</span>. 
            Currently, I’m expanding my skills in <span className="text-teal-400">Artificial Intelligence </span> 
            and <span className="text-teal-400">Agentic AI Systems </span> to build intelligent, future-ready digital solutions.
          </p>

          <div className="flex justify-center md:justify-start gap-4">
            <a
              href="/project"
              className="bg-teal-500 hover:bg-teal-600 text-white font-medium py-2 px-6 rounded-xl transition duration-300 inline-block"
            >
              View My Work
            </a>
            
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl ring-4 ring-teal-500 ring-opacity-40">
            <Image
              src={ish}
              alt="Misha Babar"
              width={384}
              height={384}
              className="object-cover w-full h-full"
              unoptimized
            />
          </div>
        </motion.div>

      </div>
    </section>

    {/* Other Sections */}
    <About />
    <Projects />
    <Skills />
    <Testimonials />
    <Blog />
    <Contact />
  </div>
);
}