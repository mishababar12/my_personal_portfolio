"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import user1 from "../../user1.jpg";
import user2 from "../../user2.jpg";
import user3 from "../../user3.jpg";

const testimonials = [
  {
    name: "Sarah Khan",
    feedback:
      "Misha did an amazing job building my website. She's creative, professional, and very responsive.",
    image: user1,
    role: "Client – Portfolio Site",
    rating: 5,
  },
  {
    name: "Ali Raza",
    feedback:
      "I loved working with Misha on our product UI. Her front-end skills are solid!",
    image: user2,
    role: "Co-Founder – Startup App",
    rating: 4,
  },
  {
    name: "Fatima Noor",
    feedback:
      "Highly recommend Misha for React-based projects. She delivers quality code and great UX.",
    image: user3,
    role: "Team Lead – Dev Agency",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#1e293b] text-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">
          What People <span className="text-teal-400">Say</span>
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              className="bg-[#0f172a] p-6 rounded-xl shadow-md hover:shadow-lg transition hover:scale-105 duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="flex flex-col items-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    src={t.image}
                    alt={t.name}
                    className="rounded-full mb-4"
                    width={80}
                    height={80}
                  />
                </motion.div>
                <h3 className="text-lg font-bold text-teal-300">{t.name}</h3>
                <p className="text-sm text-gray-400 mb-2">{t.role}</p>
                <p className="text-gray-300 text-sm mb-2">"{t.feedback}"</p>
                <div className="flex justify-center text-yellow-400">
                  {[...Array(t.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                    >
                      <FaStar className="h-5 w-5" />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
