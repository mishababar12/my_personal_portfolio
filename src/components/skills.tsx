"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    { name: "React", level: "80%", width: "w-4/5", color: "bg-cyan-500" },
    { name: "JavaScript", level: "60%", width: "w-3/5", color: "bg-yellow-300" },
    { name: "CSS", level: "75%", width: "w-3/4", color: "bg-green-500" },
    { name: "HTML", level: "80%", width: "w-4/5", color: "bg-orange-500" },
  ];

  return (
    <section className="min-h-screen bg-[#0f172a] text-white px-6 py-20">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          className="text-4xl sm:text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My <span className="text-teal-400">Technical Skills</span>
        </motion.h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-12 text-base font-light">
          I specialize in front-end web development using modern tools and frameworks. Below are some of my top skills with proficiency levels.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-[#1e293b] p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-semibold text-teal-300">{skill.name}</h3>
                <span className="text-sm text-gray-400">{skill.level}</span>
              </div>
              <div className="w-full bg-gray-700 h-2 rounded-full">
                <div className={`${skill.width} ${skill.color} h-2 rounded-full transition-all duration-500`}></div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.button
          className="mt-12 bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-6 rounded-xl transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Learn More
        </motion.button>
      </div>
    </section>
  );
}
