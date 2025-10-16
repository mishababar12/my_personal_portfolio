"use client";

import React, { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-teal-400">Contact Me</h1>
          <p className="text-gray-300 font-medium">
            Have a question or want to work together? Drop me a message!
          </p>
        </div>

        {submitted ? (
          <div className="bg-green-600 text-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-semibold mb-2">Message Sent!</h2>
            <p>I’ll get back to you soon.</p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-[#0f172a] bg-opacity-80 p-8 rounded-xl shadow-2xl grid grid-cols-1 gap-6"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-semibold mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-[#1e293b] text-white border border-gray-600 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-teal-500"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-[#1e293b] text-white border border-gray-600 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-teal-500"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="w-full bg-[#1e293b] text-white border border-gray-600 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-teal-500"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 w-fit mx-auto"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
}