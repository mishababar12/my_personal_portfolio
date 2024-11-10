"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Navbar;
function Navbar() {
    return (<div>
    <div>
    <header className="flex items-center justify-between p-4 bg-rose-100">

    <a href="#" className="text-2xl font-bold text-purple-950">Portfolio</a>


    <nav className="hidden md:flex font-bold space-x-6">
  <a href="#" className="text-purple-950 hover:text-indigo-400">Home</a>
  <a href="#about" className="text-purple-950 hover:text-indigo-400">About Me</a>
  <a href="#projects" className="text-purple-950 hover:text-indigo-400">Projects</a>
  <a href="#skills" className="text-purple-950 hover:text-indigo-400">Skills</a>
  <a href="#contact" className="text-purple-950 hover:text-indigo-400">Contact</a>
    </nav>


    <button className="hidden md:inline-flex font-bold items-center bg-red-600 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-white mt-4 md:mt-0">
  Hire Me
  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-1" viewBox="0 0 24 24">
   
  </svg>
    </button>


    <div className="md:hidden flex items-center">
  <button className="text-purple-950 hover:text-indigo-400" aria-label="Open Menu">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
      <path d="M3 6h18M3 12h18M3 18h18"/>
    </svg>
  </button>
    </div>
    </header>

    <div className="md:hidden flex flex-col space-y-4 bg-rose-100 p-4">
    <a href="#" className="text-purple-950 hover:text-indigo-400">Home</a>
    <a href="#about" className="text-purple-950 hover:text-indigo-400">About Me</a>
    <a href="#projects" className="text-purple-950 hover:text-indigo-400">Projects</a>
    <a href="#skills" className="text-purple-950 hover:text-indigo-400">Skills</a>
    <a href="#contact" className="text-purple-950 hover:text-indigo-400">Contact</a>
    <button className="font-bold text-white bg-red-600 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg">
  Hire Me
    </button>
    </div>
    </div>

    </div>);
}
