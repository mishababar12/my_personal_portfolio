"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Home;
const image_1 = __importDefault(require("next/image"));
const pro_jpg_1 = __importDefault(require("../image/pro.jpg"));
function Home() {
    return (<div>
    <section className="text-gray-400 bg-pink-200 body-font">
        <div className="container mx-auto flex flex-col md:flex-row items-center px-5 py-24">

          {/* Image Section */}
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 mx-auto">
            <div className="w-80 h-80 md:w-96 md:h-96 overflow-hidden rounded-full mx-auto">
              <image_1.default className="object-cover" alt="hero" src={pro_jpg_1.default} width={384} height={384} layout="intrinsic"/>
            </div>
          </div>

          {/* About Me Section */}
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start items-center text-center md:text-left">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-purple-950">
              Hi, I'm Misha Babar
              <br />
              Web Developer
            </h1>
            <p className="mb-8 leading-relaxed font-bold text-purple-800 text-sm sm:text-base md:text-lg lg:text-xl">
              I’m a passionate and dedicated web developer with a strong focus on creating dynamic,
              user-friendly, and responsive websites and web applications. I specialize in front-end
              development, crafting seamless user experiences using modern technologies like HTML5,
              CSS3, JavaScript, and popular frameworks such as React and Vue.js.
            </p>
            <div className="flex justify-center md:justify-start">
              <button className="inline-flex text-white bg-red-600 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg transition-all duration-300 ease-in-out">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>);
}
