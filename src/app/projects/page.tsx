import React from 'react'
import form from "../../image/form.jpg"
import todo from "../../image/todo.jpg"
import Image from 'next/image'
import Screenshot1 from "../../image/Screenshot1.png"
import bestt from "../../image/bestt.jpeg"

import ter from "../../image/ter.jpeg"

import jlow from "../../image/jlow.jpeg"



export default function Projects() {
  return (
    <div>
      <section className="text-white body-font bg-gradient-to-r from-purple-300 via-pink-400 to-purple-300">
        <div className="container px-5 py-24 mx-auto">
          {/* My Projects Heading */}
          <h1 className="text-4xl font-bold text-center text-white mb-12">
            My Projects
          </h1>

          <div className="flex flex-wrap -m-4">
            {/* TO-DO APP */}
            <div className="p-4 md:w-1/3 w-full">
              <div className="h-full border-none border-opacity-60 rounded-lg overflow-hidden flex flex-col transition-all transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
                <Image
                  className="object-cover rounded-md"
                  alt="todo"
                  src={todo}
                  width={400}
                  height={400}
                  layout="intrinsic"
                />
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <h1 className="title-font text-lg font-bold text-purple-950 mb-3">
                    TO-DO APP
                  </h1>
                  <p className="leading-relaxed mb-3 font-bold text-white">
                    A simple task management tool that helps users organize and prioritize their daily activities.
                  </p>
                  <div className="p-2 w-full">
                    <button className="flex font-bold text-white bg-violet-500 border-0 py-2 px-8 focus:outline-none focus:ring-4 focus:ring-transparent-500 hover:bg-transparent-600 hover:scale-105 active:scale-95 rounded text-lg transition-all duration-300 ease-in-out">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* CONTACT FORM */}
            <div className="p-4 md:w-1/3 w-full">
              <div className="h-full border-none border-rose-400 border-opacity-60 rounded-lg overflow-hidden flex flex-col transition-all transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
                <Image
                  className="object-cover rounded-md"
                  alt="form"
                  src={form}
                  width={400}
                  height={400}
                  layout="intrinsic"
                />
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <h1 className="title-font text-lg font-bold text-purple-950 mb-3">
                    CONTACT FORM
                  </h1>
                  <p className="leading-relaxed mb-3 font-bold text-white">
                    Allows users to securely access a website or application by entering their credentials.
                  </p>
                  <div className="p-2 w-full">
                    <button className="flex font-bold text-white bg-violet-500 border-0 py-2 px-8 focus:outline-none focus:ring-4 focus:ring-transparent-500 hover:bg-transparent-600 hover:scale-105 active:scale-95 rounded text-lg transition-all duration-300 ease-in-out">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* PORTFOLIO WEBSITE */}
            <div className="p-4 md:w-1/3 w-full">
              <div className="h-full border-none border-rose-400 border-opacity-60 rounded-lg overflow-hidden flex flex-col transition-all transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
                <Image
                  className="object-cover rounded-md"
                  alt="shot"
                  src={Screenshot1}
                  width={400}
                  height={400}
                  layout="intrinsic"
                />
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <h1 className="title-font text-lg font-bold text-purple-950 mb-3">
                    PORTFOLIO WEBSITE
                  </h1>
                  <p className="leading-relaxed mb-3 font-bold text-white">
                    A portfolio is a personal collection of a person's work, projects, or achievements.
                  </p>
                  <div className="p-2 w-full">
                    <button className="flex font-bold text-white bg-violet-500 border-0 py-2 px-8 focus:outline-none focus:ring-4 focus:ring-transparent-500 hover:bg-transparent-600 hover:scale-105 active:scale-95 rounded text-lg transition-all duration-300 ease-in-out">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* PROJECT 1 */}
            <div className="p-4 md:w-1/3 w-full">
              <div className="h-full border-none border-opacity-60 rounded-lg overflow-hidden flex flex-col transition-all transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
                <Image
                  className="object-cover rounded-md"
                  alt="project 1"
                  src={bestt}
                  width={400}
                  height={400}
                  layout="intrinsic"
                />
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <h1 className="title-font text-lg font-bold text-purple-950 mb-3">
                    PROJECT 1
                  </h1>
                  <p className="leading-relaxed mb-3 font-bold text-white">
                    Description for project 1 goes here. Talk about its features, functionality, and tech stack.
                  </p>
                  <div className="p-2 w-full">
                    <button className="flex font-bold text-white bg-violet-500 border-0 py-2 px-8 focus:outline-none focus:ring-4 focus:ring-transparent-500 hover:bg-transparent-600 hover:scale-105 active:scale-95 rounded text-lg transition-all duration-300 ease-in-out">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* PROJECT 2 */}
            <div className="p-4 md:w-1/3 w-full">
              <div className="h-full border-none border-opacity-60 rounded-lg overflow-hidden flex flex-col transition-all transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
                <Image
                  className="object-cover rounded-md"
                  alt="project 2"
                  src={jlow}
                  width={400}
                  height={400}
                  layout="intrinsic"
                />
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <h1 className="title-font text-lg font-bold text-purple-950 mb-3">
                    PROJECT 2
                  </h1>
                  <p className="leading-relaxed mb-3 font-bold text-white">
                    Description for project 2 goes here. Talk about its features, functionality, and tech stack.
                  </p>
                  <div className="p-2 w-full">
                    <button className="flex font-bold text-white bg-violet-500 border-0 py-2 px-8 focus:outline-none focus:ring-4 focus:ring-transparent-500 hover:bg-transparent-600 hover:scale-105 active:scale-95 rounded text-lg transition-all duration-300 ease-in-out">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* PROJECT 3 */}
            <div className="p-4 md:w-1/3 w-full">
              <div className="h-full border-none border-opacity-60 rounded-lg overflow-hidden flex flex-col transition-all transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
                <Image
                  className="object-cover rounded-md"
                  alt="project 3"
                  src={ter}
                  width={400}
                  height={400}
                  layout="intrinsic"
                />
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <h1 className="title-font text-lg font-bold text-purple-950 mb-3">
                    PROJECT 3
                  </h1>
                  <p className="leading-relaxed mb-3 font-bold text-white">
                    Description for project 3 goes here. Talk about its features, functionality, and tech stack.
                  </p>
                  <div className="p-2 w-full">
                    <button className="flex font-bold text-white bg-violet-500 border-0 py-2 px-8 focus:outline-none focus:ring-4 focus:ring-transparent-500 hover:bg-transparent-600 hover:scale-105 active:scale-95 rounded text-lg transition-all duration-300 ease-in-out">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
