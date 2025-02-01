"use client";

import React, { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false); // To track form submission

  // Function to handle form submission
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setSubmitted(true); // Set form submission state to true
  };

  return (
    <div>
      <section className="text-gray-600 bg-gradient-to-r from-purple-300 via-pink-400 to-purple-800 body-font relative py-24">
        <div className="container px-5 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-white">
              Contact Us
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-white font-semibold">
              "If you have any questions, inquiries, or just want to say hello,
              feel free to reach out to me. I’m always open to new opportunities
              and collaborations!"
            </p>
          </div>

          {/* Success message after form submission */}
          {submitted ? (
            <div className="bg-green-600 text-white p-4 rounded-lg text-center mb-6">
              <h2 className="text-lg font-bold">Your form has been submitted successfully!</h2>
              <p>We will get back to you shortly.</p>
            </div>
          ) : (
            <div className="flex justify-center">
              <div className="w-full md:w-2/3 lg:w-1/2 bg-pink-200 p-8 rounded-lg shadow-lg hover:shadow-2xl transform transition duration-500 hover:scale-105">
                <form onSubmit={handleSubmit}>
                  <div className="flex flex-wrap -m-4">
                    {/* Name Input */}
                    <div className="p-4 w-full md:w-1/2">
                      <div className="relative">
                        <label
                          htmlFor="name"
                          className="leading-7 text-sm font-bold text-pink-800"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="w-full bg-gradient-to-r from-purple-100 via-pink-100 to-purple-100 text-pink-800 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                          required
                        />
                      </div>
                    </div>

                    {/* Email Input */}
                    <div className="p-4 w-full md:w-1/2">
                      <div className="relative">
                        <label
                          htmlFor="email"
                          className="leading-7 text-sm font-bold text-pink-800"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="w-full bg-gradient-to-r from-purple-100 via-pink-100 to-purple-100 text-pink-800 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                          required
                        />
                      </div>
                    </div>

                    {/* Message Input */}
                    <div className="p-4 w-full">
                      <div className="relative">
                        <label
                          htmlFor="message"
                          className="leading-7 text-sm font-bold text-pink-800"
                        >
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          className="w-full bg-gradient-to-r from-purple-100 via-pink-100 to-purple-100 text-pink-800 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 py-2 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                          required
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="p-4 w-full">
                      <button
                        type="submit"
                        className="flex mx-auto text-white font-bold bg-rose-600 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg transform transition-all duration-300 ease-in-out hover:scale-105"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
