"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = About;
const react_1 = __importDefault(require("react"));
const image_1 = __importDefault(require("next/image"));
const girl_jpg_1 = __importDefault(require("../../image/girl.jpg"));
function About() {
    return (<div>
            <section className="text-gray-600 bg-rose-100 body-font">
                <div className="container mx-auto flex flex-col px-5 py-24 justify-center items-center">

                    
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10 mx-auto">
                        <image_1.default className="object-cover rounded" alt="hero" src={girl_jpg_1.default} width={600} // You can adjust width and height here as needed
     height={600} layout="intrinsic"/>
                    </div>

                   
                    <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 text-purple-950 font-bold">
                            About Me
                        </h1>
                        <p className="mb-8 leading-relaxed font-semibold text-purple-600 text-sm sm:text-base md:text-lg lg:text-xl">
                            I’m a web developer passionate about building clean, functional, and dynamic websites. 
                            With a strong background in front-end technologies, I specialize in crafting responsive,
                            user-friendly interfaces that provide seamless experiences across all devices. I am proficient 
                            in HTML, CSS, JavaScript, and modern frameworks like React.js and Vue.js.
                        </p>
                    </div>

                </div>
            </section>
        </div>);
}
