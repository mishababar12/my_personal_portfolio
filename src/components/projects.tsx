"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import todo from "../../public/image/todo.jpg";
import form from "../../public/image/form.jpg";
import Screenshot1 from "../../public/image/Screenshot1.png";
import bestt from "../../public/image/bestt.jpeg";
import ter from "../../public/image/ter.jpeg";
import jlow from "../../public/image/jlow.jpeg";

const projects = [
  {
    title: "TO-DO APP",
    description:
      "A simple task management tool that helps users organize and prioritize their daily activities.",
    image: todo,
  },
  {
    title: "CONTACT FORM",
    description:
      "Allows users to securely access a website or application by entering their credentials.",
    image: form,
  },
  {
    title: "PORTFOLIO WEBSITE",
    description:
      "A portfolio is a personal collection of a person's work, projects, or achievements.",
    image: Screenshot1,
  },
  {
    title: "PROJECT 1",
    description:
      "Description for project 1 goes here. Talk about its features, functionality, and tech stack.",
    image: bestt,
  },
  {
    title: "PROJECT 2",
    description:
      "Description for project 2 goes here. Talk about its features, functionality, and tech stack.",
    image: jlow,
  },
  {
    title: "PROJECT 3",
    description:
      "Description for project 3 goes here. Talk about its features, functionality, and tech stack.",
    image: ter,
  },
];

export default function Projects() {
  return (
    <section className="min-h-screen bg-[#0f172a] text-white px-6 py-16">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My <span className="text-teal-400">Projects</span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((proj, idx) => (
            <motion.div
              key={idx}
              className="rounded-xl overflow-hidden shadow-lg bg-[#1e293b] hover:scale-105 transition duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative group">
                <Image
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-300">
                  <p className="text-white font-semibold text-lg">Learn More</p>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-teal-300 mb-2">
                  {proj.title}
                </h3>
                <p className="text-gray-300 text-sm">{proj.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
