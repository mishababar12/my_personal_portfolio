"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Footer;
const react_1 = __importDefault(require("react"));
const fa_1 = require("react-icons/fa");
function Footer() {
    return (<div>
    
    <footer className="text-gray-600 body-font bg-rose-300">
      <div className="container px-1 py-1 mx-auto flex items-center sm:flex-row flex-col">
        {/* Logo or Brand Name */}
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-purple-800">
          <span className="ml-3 text-xl font-bold">Portfolio</span>
        </a>

        {/* Copyright and Email */}
        <p className="text-sm font-bold text-purple-700 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © 2024{" "}
          <a href="mailto:mishababar360@gmail.com" className="text-purple-800 hover:text-rose-900">
            mishababar360@gmail.com
          </a>
        </p>

        {/* Social Media Icons */}
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 font-bold justify-center sm:justify-start">
          {/* Facebook Icon */}
          <a href="https://www.facebook.com/misha.siddique.509" target="_blank" rel="noopener noreferrer" className="text-purple-800 hover:text-rose-900 mx-2 text-2xl">
            <fa_1.FaFacebook />
          </a>

          {/* GitHub Icon */}
          <a href="https://github.com/mishababar12" target="_blank" rel="noopener noreferrer" className="text-purple-800 hover:text-rose-900 mx-2 text-2xl">
            <fa_1.FaGithub />
          </a>

          {/* WhatsApp Icon */}
          <a href="https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer" className="text-purple-800 hover:text-rose-900 mx-2 text-2xl">
            <fa_1.FaWhatsapp />
          </a>

          {/* LinkedIn Icon */}
          <a href="https://www.linkedin.com/in/misha-babar-9354552b6/" target="_blank" rel="noopener noreferrer" className="text-purple-800 hover:text-rose-900 mx-2 text-2xl">
            <fa_1.FaLinkedin />
          </a>
        </span>
      </div>
    </footer>
    </div>);
}
;
