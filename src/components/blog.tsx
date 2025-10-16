"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const blogPosts = [
  {
    title: "Understanding Agentic AI with OpenAI SDK",
    summary:
      "A beginner-friendly overview of Agentic AI and how it powers modern AI applications. Learn how tools, context, and handoffs work together.",
    date: "July 27, 2025",
    slug: "understanding-agentic-ai",
  },
  {
    title: "My First Agent: Simulating Tools without an API Key",
    summary:
      "I built a health & wellness planner using a manual SDK-like setup. Here's how I simulated tools, context, and streaming responses.",
    date: "July 20, 2025",
    slug: "building-tools-openai-sdk",
  },
  {
    title: "From HTML to Agents: My Developer Journey",
    summary:
      "Starting with basic HTML & CSS, and now building intelligent agents. Here's how I transitioned from web dev to working with LLMs.",
    date: "July 10, 2025",
    slug: "how-i-built-my-first-agent",
  },
];

export default function Blog() {
  return (
    <section className="bg-gradient-to-b from-[#0f172a] to-[#1e293b] min-h-screen text-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="text-teal-400">Agentic AI</span> Blog
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              className="bg-[#0f172a] p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 hover:scale-105"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <h3 className="text-xl font-bold text-teal-300 mb-2">
                {post.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4">{post.date}</p>
              <p className="text-gray-300 text-sm mb-6">{post.summary}</p>
              <Link
                href={`/blog/${post.slug}`}
                className="text-teal-500 font-semibold hover:underline"
              >
                Read More &rarr;
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
