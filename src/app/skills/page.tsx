import React from 'react';

export default function Skills() {
  return (
    <div>
      <section className="text-gray-600 bg-gradient-to-r from-purple-300 via-pink-400 to-purple-800 body-font py-24">
        <div className="container mx-auto flex flex-col justify-center items-center">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-bold title-font text-white mb-4">
              My Technical Skills
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-white font-normal">
              "I have strong proficiency in web development technologies such as HTML, CSS, JavaScript, and React. I am also skilled in backend technologies like Node.js."
            </p>
          </div>

          <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2 justify-center">
            {/* Skill 1: React */}
            <div className="p-4 sm:w-1/2 w-full transition-transform transform hover:scale-105 hover:shadow-xl duration-300 relative flex flex-col items-center">
              <div className="bg-gray-100 rounded flex p-6 w-full justify-center items-center transition-all duration-300 hover:bg-cyan-200 z-10">
                <i className="bx bxl-react text-4xl" style={{ color: 'rgb(11, 165, 165)' }}></i>
                <span className="text-purple-950 font-bold text-xl ml-4">React</span>
              </div>
              <div className="w-full bg-gray-300 h-2 rounded-full mt-4 z-0">
                <div className="progress-line react w-4/5 h-2 bg-cyan-500 rounded-full transition-all duration-300"></div>
              </div>
            </div>

            {/* Skill 2: JavaScript */}
            <div className="p-4 sm:w-1/2 w-full transition-transform transform hover:scale-105 hover:shadow-xl duration-300 relative flex flex-col items-center">
              <div className="bg-gray-100 rounded flex p-6 w-full justify-center items-center transition-all duration-300 hover:bg-yellow-200 z-10">
                <i className="bx bxl-javascript text-4xl" style={{ color: 'rgb(223, 238, 87)' }}></i>
                <span className="text-purple-950 font-bold text-xl ml-4">JavaScript</span>
              </div>
              <div className="w-full bg-gray-300 h-2 rounded-full mt-4 z-0">
                <div className="progress-line javascript w-3/5 h-2 bg-yellow-300 rounded-full transition-all duration-300"></div>
              </div>
            </div>

            {/* Skill 3: CSS */}
            <div className="p-4 sm:w-1/2 w-full transition-transform transform hover:scale-105 hover:shadow-xl duration-300 relative flex flex-col items-center">
              <div className="bg-gray-100 rounded flex p-6 w-full justify-center items-center transition-all duration-300 hover:bg-green-200 z-10">
                <i className="bx bxl-css3 text-4xl" style={{ color: 'rgb(80, 192, 5)' }}></i>
                <span className="text-purple-950 font-bold text-xl ml-4">CSS</span>
              </div>
              <div className="w-full bg-gray-300 h-2 rounded-full mt-4 z-0">
                <div className="progress-line css w-3/4 h-2 bg-green-500 rounded-full transition-all duration-300"></div>
              </div>
            </div>

            {/* Skill 4: HTML */}
            <div className="p-4 sm:w-1/2 w-full transition-transform transform hover:scale-105 hover:shadow-xl duration-300 relative flex flex-col items-center">
              <div className="bg-gray-100 rounded flex p-6 w-full justify-center items-center transition-all duration-300 hover:bg-orange-400 z-10">
                <i className="bx bxl-html5 text-4xl" style={{ color: 'rgb(189, 124, 4)' }}></i>
                <span className="text-purple-950 font-bold text-xl ml-4">HTML</span>
              </div>
              <div className="w-full bg-gray-300 h-2 rounded-full mt-4 z-0">
                <div className="progress-line html w-4/5 h-2 bg-orange-500 rounded-full transition-all duration-300"></div>
              </div>
            </div>
          </div>

          {/* Learn More Button */}
          <button className="flex mx-auto font-bold mt-16 text-white bg-violet-800 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 hover:scale-105 rounded text-lg transition-all duration-300 ease-in-out">
            Learn More
          </button>
        </div>
      </section>
    </div>
  );
}

