"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Projects;
const react_1 = __importDefault(require("react"));
const form_jpg_1 = __importDefault(require("../../image/form.jpg"));
const todo_jpg_1 = __importDefault(require("../../image/todo.jpg"));
const image_1 = __importDefault(require("next/image"));
const Screenshot1_png_1 = __importDefault(require("../../image/Screenshot1.png"));
function Projects() {
    return (<div>
  <section className="text-purple-600 body-font bg-rose-100">
    <div className="container px-5 py-24 mx-auto">
      {/* My Projects Heading */}
      <h1 className="text-4xl font-bold text-center text-purple-950 mb-12">
        My Projects
      </h1>

      <div className="flex flex-wrap -m-4">
        {/* TO-DO APP */}
        <div className="p-4 md:w-1/3 w-full">
          <div className="h-full border-none border-opacity-60 rounded-lg overflow-hidden flex flex-col">
            <image_1.default className="object-cover rounded-md" alt="todo" src={todo_jpg_1.default} width={400} height={400} layout="intrinsic"/>
            <div className="p-6 flex flex-col justify-between flex-grow">
              <h1 className="title-font text-lg font-bold text-purple-950 mb-3">
                TO-DO APP
              </h1>
              <p className="leading-relaxed mb-3 font-bold text-purple-600">
                A simple task management tool that helps users organize and
                prioritize their daily activities. It allows users to add, edit,
                mark as complete & delete tasks, and provides a clear view.
              </p>
              <div className="p-2 w-full">
                <button className="flex font-bold text-white bg-rose-600 border-0 py-2 px-8 focus:outline-none focus:ring-4 focus:ring-transparent-500 hover:bg-transparent-600 hover:scale-105 active:scale-95 rounded text-lg transition-all duration-300 ease-in-out">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* CONTACT FORM */}
        <div className="p-4 md:w-1/3 w-full">
          <div className="h-full border-none border-rose-400 border-opacity-60 rounded-lg overflow-hidden flex flex-col">
            <image_1.default className="object-cover rounded-md" alt="form" src={form_jpg_1.default} width={400} height={400} layout="intrinsic"/>
            <div className="p-6 flex flex-col justify-between flex-grow">
              <h1 className="title-font text-lg font-bold text-purple-950 mb-3">
                CONTACT FORM
              </h1>
              <p className="leading-relaxed mb-3 font-bold text-purple-600">
                Allows users to securely access a website or application by
                entering their credentials (username/email and password). It
                includes form validation, user authentication, and error handling.
              </p>
              <div className="p-2 w-full">
                <button className="flex font-bold text-white bg-rose-600 border-0 py-2 px-8 focus:outline-none focus:ring-4 focus:ring-transparent-500 hover:bg-transparent-600 hover:scale-105 active:scale-95 rounded text-lg transition-all duration-300 ease-in-out">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* PORTFOLIO WEBSITE */}
        <div className="p-4 md:w-1/3 w-full">
          <div className="h-full border-none border-rose-400 border-opacity-60 rounded-lg overflow-hidden flex flex-col">
            <image_1.default className="object-cover rounded-md" alt="shot" src={Screenshot1_png_1.default} width={400} height={400} layout="intrinsic"/>
            <div className="p-6 flex flex-col justify-between flex-grow">
              <h1 className="title-font text-lg font-bold text-purple-950 mb-3">
                PORTFOLIO WEBSITE
              </h1>
              <p className="leading-relaxed mb-3 font-bold text-purple-600">
                A portfolio is a personal collection of a person's work,
                projects, or achievements, typically displayed online.
                It can also serve as an ongoing testament to your work as you
                grow and evolve in your field.
              </p>
              <div className="p-2 w-full">
                <button className="flex font-bold text-white bg-rose-600 border-0 py-2 px-8 focus:outline-none focus:ring-4 focus:ring-transparent-500 hover:bg-transparent-600 hover:scale-105 active:scale-95 rounded text-lg transition-all duration-300 ease-in-out">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    </div>);
}
