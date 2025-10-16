"use client";

import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaWhatsapp,
  FaLinkedin,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white w-full mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">

        {/* Brand/Logo */}
        <div className="text-xl font-bold text-teal-400">Misha's Portfolio</div>

        {/* Email & Copyright */}
        <p className="text-sm text-gray-300 text-center md:text-left">
          &copy; 2024 —
          <a
            href="mailto:mishababar360@gmail.com"
            className="ml-1 text-teal-300 hover:underline hover:text-teal-500"
          >
            mishababar360@gmail.com
          </a>
        </p>

        {/* Social Icons with Animations */}
        <div className="flex space-x-4 text-2xl">
          <motion.a
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
            href="https://www.facebook.com/misha.siddique.509"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-500"
          >
            <FaFacebook />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/mishababar12"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300"
          >
            <FaGithub />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
            href="https://web.whatsapp.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-green-500"
          >
            <FaWhatsapp />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
            href="https://www.linkedin.com/in/misha-babar-9354552b6/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400"
          >
            <FaLinkedin />
          </motion.a>
        </div>
      </div>
    </footer>
  );
}
