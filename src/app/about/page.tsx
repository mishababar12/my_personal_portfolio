import React from 'react';
import Image from 'next/image';
import girl from "../../image/girl.jpg";

export default function About() {
  return (
    <div>
      <section className="text-gray-600 bg-gradient-to-r from-purple-300 via-pink-400 to-purple-800 body-font">
        <div className="container mx-auto flex flex-col px-5 py-24 justify-center items-center">

          {/* Image Section */}
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10 mx-auto">
            <Image
              className="object-cover rounded-lg shadow-lg transform transition duration-500 hover:scale-105"
              alt="hero"
              src={girl}
              width={600}
              height={600}
              layout="intrinsic"
            />
          </div>

          {/* Text Section */}
          <div className="w-full md:w-2/3 flex flex-col  items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mt-10 text-white font-bold">
              About Me
            </h1>
            <p className="mt-8 leading-relaxed font-normal text-white text-sm sm:text-base md:text-lg lg:text-xl">
              I’m a web developer passionate about building clean, functional, and dynamic websites. 
              With a strong background in front-end technologies, I specialize in crafting responsive,
              user-friendly interfaces that provide seamless experiences across all devices. I am proficient 
              in HTML, CSS, JavaScript, and modern frameworks like React.js and Vue.js.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
