"use client";
import { useState } from "react";
import Image from "next/image";

// Custom Chevron Icons
const ChevronLeft = (props:any) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    width="24"
    height="24"
    {...props}
  >
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

const ChevronRight = (props:any) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    width="24"
    height="24"
    {...props}
  >
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

// ✅ All Updated Projects
const projects = [
  {
    title: "Personal Portfolio Website",
    image: "/image/port.png",
    link: "https://portfolio-website-omega-pearl.vercel.app/",
  },
  {
    title: "Multipage Modern Website",
    image: "/image/multipage.png",
    link: "https://multipage-website-rho.vercel.app/",
  },
  {
    title: "HTML Static Website",
    image: "/image/html.png",
    link: "https://html-website-orcin.vercel.app/",
  },
  {
    title: "E-Commerce Store Design",
    image: "/image/ecommerceshop.png",
    link: "https://e-commerce-ten-peach-99.vercel.app/",
  },
  {
    title: "Hackathon E-Commerce Project",
    image: "/image/ecommercenike.png",
    link: "https://hackathon3-navy.vercel.app/",
  },
  {
    title: "Recipe App (Streamlit)",
    image: "/image/recepie.png",
    link: "https://mishababar12-09-recepie-streamlit-recepie-lmje6x.streamlit.app/",
  },
  {
    title: "BMI Calculator (Streamlit)",
    image: "/image/bmi.png",
    link: "https://mishababar12-bmi-calculator-calculate-jhuvh0.streamlit.app/",
  },
  {
    title: "Unit Converter (Streamlit)",
    image: "/image/unitconvertor.png",
    link: "https://mishababar12-unit-convertor-new-wcalff.streamlit.app/",
  },
  {
    title: "Travel & Expense Planner (Streamlit)",
    image: "/image/travel.png",
    link: "https://mishababar12-growth-app-new-yhptes.streamlit.app/",
  },
  {
    title: "Blog Website",
    image: "/image/blog.png",
    link: "https://my-blog-fawn-nu.vercel.app/",
  },
];

export default function ProjectShowcase() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () =>
    setCurrent(current === projects.length - 1 ? 0 : current + 1);
  const prevSlide = () =>
    setCurrent(current === 0 ? projects.length - 1 : current - 1);

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center text-white px-6 py-10">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-teal-400">
        My Projects Showcase
      </h1>

      <div className="relative w-full max-w-2xl flex items-center justify-center">
        <button
          onClick={prevSlide}
          className="absolute left-0 bg-teal-500 hover:bg-teal-600 p-2 rounded-full"
        >
          <ChevronLeft />
        </button>

        <div className="text-center">
          <Image
            src={projects[current].image}
            alt={projects[current].title}
            width={600}
            height={350}
            unoptimized
            className="rounded-xl shadow-lg mb-4 object-cover"
          />
          <h2 className="text-xl font-semibold mb-2">
            {projects[current].title}
          </h2>
          <a
            href={projects[current].link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-teal-500 hover:bg-teal-600 px-5 py-2 rounded-lg transition duration-300 inline-block"
          >
            Visit Project
          </a>
        </div>

        <button
          onClick={nextSlide}
          className="absolute right-0 bg-teal-500 hover:bg-teal-600 p-2 rounded-full"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
}
