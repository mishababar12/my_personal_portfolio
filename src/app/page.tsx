import Image from "next/image"
import ish from "../image/ish.jpg"


export default function Home() {
  return (
    <div>
    <section className="text-white bg-gradient-to-r from-purple-300 via-pink-400 to-purple-800 body-font">
        <div className="container mx-auto flex flex-col md:flex-row items-center px-5 py-24">

          {/* Image Section */}
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 mx-auto">
            <div className="w-80 h-80 md:w-96 md:h-96 overflow-hidden rounded-full mx-auto">
              <Image
                className="object-cover"
                alt="hero"
                src={ish}
                width={384}
                height={384}
                layout="intrinsic"
              />
            </div>
          </div>

          {/* About Me Section */}
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start items-center text-center md:text-left">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-white">
              Hi, I'm Misha Babar
              <br />
              Web Developer
            </h1>
            <p className="mb-8 leading-relaxed font-normal text-white text-sm sm:text-base md:text-md lg:text-lg">
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
    </div>)}