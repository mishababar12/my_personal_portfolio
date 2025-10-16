"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Skills() {
const skills = [
{ name: "React", level: "85%", width: "85%", color: "bg-cyan-500" },
{ name: "JavaScript", level: "75%", width: "75%", color: "bg-yellow-400" },
{ name: "TypeScript", level: "70%", width: "70%", color: "bg-blue-400" },
{ name: "HTML", level: "90%", width: "90%", color: "bg-orange-500" },
{ name: "CSS / Tailwind CSS", level: "85%", width: "85%", color: "bg-green-500" },
{ name: "Python", level: "80%", width: "80%", color: "bg-indigo-500" },
{ name: "Agent SDK (AI Agents)", level: "70%", width: "70%", color: "bg-teal-400" },
{ name: "Streamlit", level: "80%", width: "80%", color: "bg-purple-500" },
];
  
return (
  <section className="min-h-screen bg-[#0f172a] text-white px-6 py-20 flex flex-col justify-center">
    <div className="max-w-5xl mx-auto text-center">
      {/* Section Title */}
      <motion.h2
        className="text-4xl sm:text-5xl font-bold mb-6"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My <span className="text-teal-400">Technical Skills</span>
      </motion.h2>

      <p className="text-gray-300 max-w-2xl mx-auto mb-12 text-base font-light">
        I specialize in front-end and AI-driven development using modern technologies.
        Here are my top technical skills and proficiency levels.
      </p>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="bg-[#1e293b] p-6 rounded-xl shadow-md hover:shadow-teal-500/40 hover:scale-105 transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-xl font-semibold text-teal-300">
                {skill.name}
              </h3>
              <span className="text-sm text-gray-400">{skill.level}</span>
            </div>

            <div className="w-full bg-gray-700 h-2 rounded-full overflow-hidden">
              <motion.div
                className={`${skill.color} h-2 rounded-full`}
                initial={{ width: "0%" }}
                whileInView={{ width: skill.width }}
                transition={{ duration: 1, ease: "easeOut" }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

}
