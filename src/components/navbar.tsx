"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    setMenuOpen(false); // close menu on route change
  }, [pathname]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/skills", label: "Skills" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <motion.header
      className="bg-gradient-to-r from-[#0f172a] to-[#1e293b] text-white shadow-lg sticky top-0 z-50"
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-extrabold text-teal-400 tracking-wide">
          Misha.dev
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-sm font-semibold">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`transition hover:text-teal-300 ${
                pathname === href ? "text-teal-400 underline" : ""
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Hire Me Button */}
        <Link
          href="/contact"
          className="hidden md:inline-block bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-6 rounded-xl transition duration-300"
        >
          Hire Me
        </Link>

        {/* Hamburger */}
        <div className="md:hidden">
          <button className="text-white" onClick={toggleMenu} aria-label="Toggle Menu">
            {menuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          className="md:hidden bg-[#1e293b] px-6 py-4 space-y-4 text-sm font-medium"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`block text-white hover:text-teal-300 transition ${
                pathname === href ? "text-teal-400 underline" : ""
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="block text-center text-white bg-teal-500 hover:bg-teal-600 py-2 px-4 rounded-xl mt-2"
          >
            Hire Me
          </Link>
        </motion.div>
      )}
    </motion.header>
  );
}
